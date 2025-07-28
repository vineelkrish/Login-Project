// server.js

// 1. Import necessary packages
const express = require('express');
const cors = require('cors');

// 2. Create an Express app
const app = express();
const PORT = 5000; // We'll run our backend on port 5000

// This is a temporary, in-memory "database" for demonstration purposes.
// In a real application, you would use a database like MongoDB.
let users = []; 

// 3. Add Middleware
// Middleware are functions that run for every request.
app.use(cors()); // Allows our frontend to talk to our backend
app.use(express.json()); // Allows the server to understand JSON data sent from the frontend

// 4. Define API Endpoints (Routes)
app.post('/api/register', (req, res) => {
    // Get the user data from the request body
    const { username, password } = req.body;

    console.log('Received registration data:');
    console.log('Username:', username);
    console.log('Password:', password);
    
    // Basic validation
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Check if the user already exists (in a real app, you'd query the database)
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(409).json({ message: 'Username already taken.' });
    }

    // Store the new user (in a real app, you'd save to the database)
    const newUser = { username, password }; // IMPORTANT: Never store passwords in plain text! We will cover hashing later.
    users.push(newUser);

    console.log('Current users:', users);

    // Send a success response back to the frontend
    res.status(201).json({ message: 'User registered successfully!' });
});

// 5. Start the Server
app.listen(PORT, () => {
    console.log(`🎉 Backend server is running on http://localhost:${PORT}`);
});