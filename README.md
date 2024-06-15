# Harmonia

## Project Overview

This repository contains two main components:

1. **Client Application (`harmonia-react`)**: A React application using Vite for development, TypeScript for type safety, Tailwind CSS for styling, and several other dependencies to enhance functionality.
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

#### Client Application (`harmonia-react`)

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

#### Client Application (`harmonia-react`)

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

## Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are installed correctly.
2. Check the `.env` files for any missing or incorrect environment variables.
3. Refer to the documentation of the respective libraries and frameworks used.

---

**Note**: Replace `your-database-url`, `your-jwt-secret`, `your-email@example.com`, and `your-email-password` in the `.env` example with actual values required for your project.