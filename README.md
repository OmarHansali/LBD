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
    "username": "new_user",
    "password": "new_password",
    "role": "user",
    "email": "new_user@example.com",
    "phoneNumber": "1234567890"
}
```

### Response (GET /user)

```json
[
    {
        "id": 1,
        "username": "example_user",
        "role": "user",
        "email": "example@example.com",
        "phoneNumber": "1234567890",
        "CEN": null,
        "profile": null,
        "createdAt": "2024-06-12T14:56:00.323Z",
        "updatedAt": null
    },
    {
        "id": 2,
        "username": "another_user",
        "role": "user",
        "email": "another@example.com",
        "phoneNumber": "9876543210",
        "CEN": null,
        "profile": null,
        "createdAt": "2024-06-12T15:00:00.323Z",
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
  "type": "fablab",
  "capacity": 1,
  "availability": false,
  "startHour": "2024-06-12T09:00:00.000Z",
  "endHour": "2024-06-12T17:00:00.000Z"
}

```

### Response (GET /salle)

```json
[
    {
        "id": 1,
        "number": "1",
        "type": "fablab",
        "capacity": 1,
        "availability": false,
        "startHour": "2024-06-12T09:00:00.000Z",
        "endHour": "2024-06-12T17:00:00.000Z"
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
    "salleIds": [1, 2, 3]
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
        "salles": [
            {
                "id": 1,
                "number": "1",
                "type": "fablab",
                "capacity": 1,
                "availability": false
            }
        ]
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
