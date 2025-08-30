# Mini SaaS Backend

This is the backend API for the Mini SaaS Subscription App, built with Node.js and Express. It handles all user authentication, content management, and subscription logic.

-----

### Features

  * **User Authentication**: Secure signup and login with JWT (JSON Web Tokens).
  * **Role-Based Access Control**: Differentiates between 'free' and 'premium' users.
  * **Content API**: Serves articles filtered by the user's subscription status.
  * **User Profile API**: Provides user details and subscription status.
  * **Mock Payment Simulation**: An endpoint that upgrades a user's role to premium.
  * **Data Persistence**: All user and content data is stored in a MongoDB database.

-----

### Tech Stack

  * **Node.js & Express.js**: For building the REST API.
  * **Mongoose**: For connecting to and managing MongoDB data.
  * **bcryptjs**: For securely hashing passwords.
  * **jsonwebtoken**: For creating and verifying authentication tokens.
  * **cors**: For handling Cross-Origin Resource Sharing.
  * **dotenv**: For managing environment variables.

-----

### Getting Started

Follow these steps to set up and run the backend locally.

#### Prerequisites

  * Node.js (v18 or higher)
  * MongoDB (local installation or cloud service like MongoDB Atlas)

#### Installation

1.  Clone the repository and navigate to the `backend` directory.

    ```bash
    git clone https://github.com/h4rsh003/mini_saas_backend.git
    cd mini_saas_backend
    ```

2.  Install all required dependencies.

    ```bash
    npm install
    ```

3.  Create a `.env` file in the `backend` directory with the following variables:

    ```
    # .env
    DATABASE_URL=your_mongodb_connection_string
    JWT_SECRET=a_strong_random_secret_key
    ```

    *Note: For local development, `DATABASE_URL` can be `mongodb://127.0.0.1:27017/your_db_name`.*

4.  Run the database seeder script to populate the database with initial content.

    ```bash
    node seed.js
    ```

5.  Start the backend server.

    ```bash
    node server.js
    ```

    The server will run on `http://localhost:5000`.

-----

### API Endpoints

The backend provides a RESTful API for all application functionality.

| Endpoint | Method | Description | Example Request Body |
| :--- | :--- | :--- | :--- |
| `/api/signup` | `POST` | Creates a new user with a default 'free' role. | `{"username": "testuser", "email": "test@example.com", "password": "password123"}` |
| `/api/login` | `POST` | Authenticates a user and returns a JWT token. | `{"email": "test@example.com", "password": "password123"}` |
| `/api/content` | `GET` | Returns content filtered by user role. (Requires Auth) | (Header) `Authorization: Bearer <token>` |
| `/api/profile` | `GET` | Returns the authenticated user's profile details and role. (Requires Auth) | (Header) `Authorization: Bearer <token>` |
| `/api/checkout` | `POST` | Simulates a payment and upgrades the user's role to 'premium'. (Requires Auth) | (Header) `Authorization: Bearer <token>` |

-----

### Database Schema

#### `User` Collection

  * `username`: String (unique, required)
  * `email`: String (unique, required)
  * `password`: String (required)
  * `role`: String (default: 'free', enum: 'free' or 'premium')

#### `Content` Collection

  * `title`: String (required)
  * `body`: String (required)
  * `type`: String (default: 'free', enum: 'free' or 'premium')

-----

### Repository

  * **GitHub Backend**: [https://github.com/h4rsh003/mini\_saas\_backend](https://github.com/h4rsh003/mini_saas_backend)
