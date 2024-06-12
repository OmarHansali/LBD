Here's the updated README.md file with the provided information:

---

# Project Name API Documentation

This document provides information about the routes available in the Project Name API.

## Base URL

The base URL for all API requests is `http://localhost:5000`.

## Authentication

The following routes are available for user authentication:

- `POST /auth/login`: Log in with username and password to obtain an authentication token.

### Request

```json
{
    "username": "example_user",
    "password": "example_password"
}
```

### Response

```json
{
    "token": "JWT_TOKEN",
    "user": {
        "id": 1,
        "username": "example_user",
        "role": "user",
        "email": "example@example.com",
        "phoneNumber": "1234567890",
        "CEN": null,
        "profile": null,
        "createdAt": "2024-06-12T14:56:00.323Z",
        "updatedAt": null
    }
}
```

## User Routes

The following routes are available for managing users:

- `GET /user`: Get all users.
- `GET /user/:id`: Get user by ID.
- `POST /user`: Create a new user.
- `PUT /user/:id`: Update user by ID.
- `DELETE /user/:id`: Delete user by ID.

### Request (POST /user)

```json
{
    "username": "user1",
    "email": "allabouch2004@gmail.com",
    "phoneNumber": "9876543210",
    "role": "admin",
    "CEN": "12345",
    "profile": "https://srt.sdf.com/pic.png"
}

```

### Response (GET /user)

```json
[
    {
        "id": 1,
        "username": "user",
        "password": "$2b$10$0O3ecQexd1eJys./u8SwAulty7Saak7swPF/Pdnd0C/Xv15GNGmXi",
        "role": "admin",
        "email": "allabouch2004@gmail.com",
        "phoneNumber": "9876543210",
        "CEN": "12345",
        "profile": "https://srt.sdf.com/pic.png",
        "createdAt": "2024-06-12T18:43:35.393Z",
        "updatedAt": null
    },
    {
        "id": 2,
        "username": "user1",
        "password": "$2b$10$vVt09xZNegG/W11wo0FZzeSfTrS3GSzvCPGgm815m.GFSZ3utI8rm",
        "role": "admin",
        "email": "allabouch2004@gmail.com",
        "phoneNumber": "9876543210",
        "CEN": "12345",
        "profile": "https://srt.sdf.com/pic.png",
        "createdAt": "2024-06-12T18:44:12.917Z",
        "updatedAt": null
    }
]
```

## Salle Routes

- `POST /salle`: Create a new salle.
- `GET /salle`: Get all salles.

### Request (POST /salle)

```json
{
  "number": "1",
  "type": "box",
  "capacity": 1,
  "availability": false,
  "startHour": "2024-06-13T08:00:00Z",
  "endHour": "2024-06-13T17:00:00Z",
  "materielIds": [1, 2, 3]
}


```

### Response (GET /salle)

```json
[
    {
        "id": 4,
        "number": "1",
        "type": "fablab",
        "capacity": 1,
        "availability": false,
        "startHour": "2024-06-13T08:00:00.000Z",
        "endHour": "2024-06-13T17:00:00.000Z",
        "materiels": [
            {
                "id": 3,
                "name": "Projector",
                "quantity": 1,
                "availability": true
            }
        ]
    }
]
```

## Materiel Routes

- `POST /materiel`: Create a new materiel.
- `GET /materiel`: Get all materiels.

### Request (POST /materiel)

```json
{
    "name": "Projector",
    "quantity": 1,
    "availability": true,
}
```

### Response (GET /materiel)

```json
[
    {
        "id": 1,
        "name": "Projector",
        "quantity": 1,
        "availability": true,
    }
]
```

## Reservation Routes

- `POST /reservation`: Create a new reservation.
- `GET /reservation`: Get all reservations.

### Request (POST /reservation)

```json
{
  "userId": 1,
  "salleId": 2,
  "dateReservation": "2024-06-12T14:00:00.000Z",
  "heureReservation": "14:00",
  "duration": 5,
  "code": 1234
}
```

### Response (GET /reservation)

```json
[
    {
        "id": 2,
        "userId": 1,
        "salleId": 2,
        "dateReservation": "2024-06-12T14:00:00.000Z",
        "heureReservation": "14:00",
        "duration": 5,
        "code": 1234,
        "user": {
            "id": 1,
            "username": "user",
            "role": "user",
            "email": "updatedemail@example.com",
            "phoneNumber": "9876543210",
            "CEN": null,
            "profile": null
        },
        "salle": {
            "id": 2,
            "number": "1",
            "type": "box",
            "capacity": 1
        }
    }
]
