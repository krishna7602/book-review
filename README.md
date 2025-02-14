# Book Review Platform

## Overview

This project is a Book Review Platform that allows users to sign up, log in, and review books. It consists of a frontend built with React and a backend built with Node.js and Express.

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB

### Frontend Setup

1. Navigate to the `Frontend` directory:
   ```sh
   cd Frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the `Frontend` directory with the following content:
   ```
   VITE_BASE_URL=http://localhost:8000
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

### Backend Setup

1. Navigate to the `Backend` directory:
   ```sh
   cd Backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the `Backend` directory with the following content:
   ```
   PORT=8000
   DB_URL=mongodb://localhost:27017/bookstore
   JWT_SECRET=67387te8q7qgyqg
   ```

4. Install necessary packages:
   ```sh
   npm install express mongoose bcrypt jsonwebtoken dotenv cors cookie-parser express-validator
   ```

5. Start the server:
   ```sh
   npm start
   ```

## How It Works

### Frontend

- The frontend is built using React and Vite.
- It uses Tailwind CSS for styling.
- Axios is used for making HTTP requests to the backend.
- React Router is used for navigation.

### Backend

- The backend is built using Node.js and Express.
- MongoDB is used as the database.
- Mongoose is used for object data modeling (ODM).
- JWT (JSON Web Token) is used for authentication.
- bcrypt is used for hashing passwords.
- The backend has routes for user and admin authentication, and for managing books and reviews.

### Folder Structure

```
book-review/
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.cjs
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── .env
├── Backend/
│   ├── controller/
│   ├── db/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── .env
└── README.md
```

## Running the Application

1. Start the backend server:
   ```sh
   cd Backend
   npm start
   ```

2. Start the frontend development server:
   ```sh
   cd Frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## License

This project is licensed under the MIT License.
