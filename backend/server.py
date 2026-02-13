from fastapi import FastAPI, APIRouter, Depends, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime
from sqlalchemy import create_engine, Column, String, DateTime
from sqlalchemy.orm import sessionmaker, declarative_base, Session

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Database Setup (SQLite)
# Create the database file in the same directory as server.py
SQLITE_URL = "sqlite:///./sql_app.db"

engine = create_engine(
    SQLITE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# SQLAlchemy Model
class StatusCheckDB(Base):
    __tablename__ = "status_checks"

    id = Column(String, primary_key=True, index=True, default=lambda: str(uuid.uuid4()))
    client_name = Column(String, index=True)
    timestamp = Column(DateTime, default=datetime.utcnow)

# Create tables
Base.metadata.create_all(bind=engine)

# Pydantic Models
class StatusCheckBase(BaseModel):
    client_name: str

class StatusCheckCreate(StatusCheckBase):
    pass

class StatusCheck(StatusCheckBase):
    model_config = ConfigDict(from_attributes=True)
    
    id: str
    timestamp: datetime

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# App Setup
app = FastAPI()
api_router = APIRouter(prefix="/api")

@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate, db: Session = Depends(get_db)):
    db_status = StatusCheckDB(
        id=str(uuid.uuid4()),
        client_name=input.client_name,
        timestamp=datetime.utcnow()
    )
    db.add(db_status)
    db.commit()
    db.refresh(db_status)
    return db_status

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks(db: Session = Depends(get_db)):
    status_checks = db.query(StatusCheckDB).limit(100).all()
    return status_checks

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)