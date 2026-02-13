<?php
// submit.php

// 1. Set headers for JSON response and CORS (broad for now, tighten for prod if needed)
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST');

// 2. Define the SQLite database file path
$db_file = __DIR__ . '/database.sqlite';

try {
    // 3. Connect to SQLite database (will create file if it doesn't exist)
    $pdo = new PDO("sqlite:$db_file");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 4. Create table if it doesn't exist
    $createTableQuery = "
        CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            company TEXT,
            phone TEXT,
            message TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ";
    $pdo->exec($createTableQuery);

    // 5. Handle POST request
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        // Sanitize and validate inputs
        $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
        $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
        $company = filter_input(INPUT_POST, 'company', FILTER_SANITIZE_SPECIAL_CHARS);
        $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);
        $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);

        if (!$name || !$email || !$message) {
            echo json_encode(['status' => 'error', 'message' => 'Please fill in all required fields (Name, Email, Message).']);
            exit;
        }

        // 6. Insert data into database
        $stmt = $pdo->prepare("INSERT INTO contacts (name, email, company, phone, message) VALUES (:name, :email, :company, :phone, :message)");
        $result = $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':company' => $company,
            ':phone' => $phone,
            ':message' => $message
        ]);

        if ($result) {
            echo json_encode(['status' => 'success', 'message' => 'Message received successfully']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to save message']);
        }

    } else {
        // Method not allowed
        http_response_code(405);
        echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed']);
    }

} catch (PDOException $e) {
    // Handle database connection errors
    error_log("Database Error: " . $e->getMessage()); // Log error to server logs
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Internal Server Error. Please try again later.']);
}
?>
