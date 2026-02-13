import sys
import os
from a2wsgi import ASGIMiddleware

# Add the current directory to sys.path
sys.path.append(os.getcwd())

from server import app

# Create the WSGI application callable
application = ASGIMiddleware(app)
