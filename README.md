# Harmonia

## Project Overview

This repository contains two main components:

1. **Client Application (`harmonia`)**: A React application using Vite for development, TypeScript for type safety, Tailwind CSS for styling, and several other dependencies to enhance functionality.
2. **Server Application (`server`)**: A Node.js server using Express.js, Prisma for database management, and several other dependencies for handling authentication, environment variables, and more.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher (comes with Node.js)
- **Vite**: For the client application
- **Prisma CLI**: For database migrations

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/OmarHansali/LBD.git
cd LBD
```

### 2. Install Dependencies

#### Client Application (`harmonia`)

```sh
cd client
npm install
```

#### Server Application (`server`)

```sh
cd server
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the `server` directory, and add the required environment variables:

```
# .env file for server
DATABASE_URL="mysql://root:root@localhost:3306/lbd"
JWT_SECRET="test"
PORT=5000
SMTP_USER="composer.require.phpmailer@gmail.com"
SMTP_PASS='vbaj ntsz sqme uafx'
```

### 4. Run Database Migrations

```sh
cd server
npm run migrate
```

### 5. Running the Applications

#### Client Application (`harmonia`)

```sh
cd client
npm run dev
```

#### Server Application (`server`)

```sh
cd server
npm run dev
```

### 6. Access the Applications

- The **client application** will be running at `http://localhost:5173` (default Vite port).
- The **server application** will be running at `http://localhost:5000`.

Sure! Here's a sequence of commands you can copy and paste to set up the project in one go.

### 7. Full Setup Commands

```sh
# 1. Clone the Repository
git clone https://github.com/OmarHansali/LBD.git
cd LBD

# 2. Install Client Dependencies
cd client
npm install

# 3. Install Server Dependencies
cd ../server
npm install

# 4. Setup Environment Variables
echo 'DATABASE_URL="mysql://root@localhost:3306/lbd"' > .env
echo 'JWT_SECRET="test"' >> .env
echo 'PORT=5000' >> .env
echo 'SMTP_USER="composer.require.phpmailer@gmail.com"' >> .env
echo "SMTP_PASS='vbaj ntsz sqme uafx'" >> .env

# 5. Run Database Migrations
npm run migrate

# 6. Run the Server Application
npm run dev &

# 7. Run the Client Application
cd ../client
npm run dev
```

### Explanation

1. **Clone the Repository**: Clones the repository and navigates into the project directory.
2. **Install Client Dependencies**: Installs dependencies for the client application.
3. **Install Server Dependencies**: Installs dependencies for the server application.
4. **Setup Environment Variables**: Creates the `.env` file and adds the required environment variables.
5. **Run Database Migrations**: Runs the database migrations.
6. **Run the Server Application**: Starts the server application.
7. **Run the Client Application**: Starts the client application.

Copy and paste these commands into your terminal to set up and run both the client and server applications.

## Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are installed correctly.
2. Check the `.env` files for any missing or incorrect environment variables.
3. Refer to the documentation of the respective libraries and frameworks used.

---

**Note**: Replace `your-database-url`, `your-jwt-secret`, `your-email@example.com`, and `your-email-password` in the `.env` example with actual values required for your project.