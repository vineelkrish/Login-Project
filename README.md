## \#\# Simple User Registration App (Client-Server Demo)

This project is a basic demonstration of how a frontend application communicates with a backend server. It features a simple registration form built with HTML, CSS, and Vanilla JavaScript that sends user data to a backend server built with Node.js and Express.

### \#\# Core Concepts Demonstrated

  * **Frontend (Client):** A simple HTML form (`frontend/index.html`) that captures user input.
  * **Backend (Server):** A Node.js/Express server (`backend/server.js`) that listens for API requests.
  * **API Communication:** The frontend uses the `fetch()` API to send a `POST` request with user data to the backend.
  * **CORS:** The backend uses the `cors` package to allow requests from the frontend.
  * **In-Memory "Database":** For simplicity, the server stores registered users in a temporary array. **Note:** Data is lost when the server restarts.

### \#\# Project Structure

```
login-project/
├── backend/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
└── frontend/
    ├── index.html
    └── script.js
```

-----

### \#\# How to Run This Project

1.  **Prerequisites:**

      * You must have [Node.js](https://nodejs.org/) installed on your machine.

2.  **Start the Backend Server:**

      * Open a terminal and navigate to the `backend` directory:
        ```bash
        cd backend
        ```
      * Install the necessary dependencies:
        ```bash
        npm install
        ```
      * Start the server:
        ```bash
        node server.js
        ```
      * The server will be running on `http://localhost:5000`.

3.  **Run the Frontend Application:**

      * Navigate to the `frontend` folder in your file explorer.
      * Right-click the `index.html` file and open it in your web browser (e.g., Chrome, Firefox).

4.  **Test:**

      * Fill out the registration form in your browser and click "Register".
      * You will see a confirmation message on the webpage, and the user data will be logged in the terminal where your backend server is running.
