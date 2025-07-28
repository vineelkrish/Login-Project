// frontend/script.js

document.getElementById('registerForm').addEventListener('submit', async (event) => {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Get the form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Use the Fetch API to send a POST request to our backend
    try {
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST', // We are sending data, so we use POST
            headers: {
                'Content-Type': 'application/json', // Tell the server we are sending JSON data
            },
            body: JSON.stringify({ username, password }), // Convert the JS object to a JSON string
        });
        
        // Get the response from the server as JSON
        const data = await response.json();

        // Display the server's message to the user
        messageElement.textContent = data.message;
        
        if (response.ok) {
            // If registration was successful
            messageElement.style.color = 'green';
        } else {
            // If there was an error
            messageElement.style.color = 'red';
        }

    } catch (error) {
        // Handle network errors or other issues with the fetch call
        console.error('Error:', error);
        messageElement.textContent = 'An error occurred. Please try again later.';
        messageElement.style.color = 'red';
    }
});