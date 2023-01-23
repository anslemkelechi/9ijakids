# REST_API

This is an api for demonstrating some CRUD operations

---

## Built with

- Nodejs
- Express.js
- Mongodb
- Javascript

---

### Links

- Solution URL: https://github.com/anslemkelechi/Blog-API
- Live Site URL:  https://nineijakids.onrender.com

---

## Requirements

<details>
<summary>Project Requirements</summary>
1. Users should be able to create, read, update amd delete user.
</details>

---

## Setup

- Install NodeJS, mongodb
- pull this repo
- update config.env
- run `npm run dev`

---

## Base URL

- https://nineijakids.onrender.com

## Models

---

### User

| field           | data_type | constraints |
| --------------- | --------- | ----------- |
| email          | string    | required    |
| firstname      | string    | required    |
| lastname       | string    | required    |
| phonenumber    | number    | false    |


## APIs

---

### Create User

- Route: /api/v1/users/new-user
- Method: POST
- Body:

```
{
  "email": "example@mail.com",
  "firstname": "jon",
  "lastname": "doe",
  "phonenumber: "090456875765"
}
```

- Responses

  - Success

```
{
    status: "success"
    message: 'User created successful',
    "user": {
        "email": "example@mail.com",
        "firstname": "jon",
        "lastname": "doe",
        "phonemumber": "12345f678"
       }
    }
}
```

- error

```
{
    status: "error",
    message: 'error message',
}
```

---



- error

```
{
  "status": "error",
  "message": error message,
}

```

---

### Read Single User

- Route: /api/v1/users
- Method: POST
- Body:

```
{
  "email": "example@mail.com"
}
```

- Responses

  - Success

```
{
    status: "success"
    message: 'User Found successful',
    "user": {
        "email": "example@mail.com",
        "firstname": "jon",
        "lastname": "doe",
        "phonemumber": "12345f678"
       }
    }
}
```

- error

```
{
    status: "error",
    message: 'error message',
}
```

---


### Read All Users

- Route: /api/v1/users
- Method: GET
- Body:

```

- Responses

  - Success

```
{
    status: "success"
    Results: 1
    message: 'Users,
    "user": {
        "email": "example@mail.com",
        "firstname": "jon",
        "lastname": "doe",
        "phonemumber": "12345f678"
       }
    }
}

```

- error

```
{
    status: "error",
    message: 'error message',
}
```

---

### Update User

- Route: /api/v1/users/<userID>
- Method: PATCH
- Body:

```
{
  "lastname": "doe",
  "phonenumber: "090456875765"
}
```

- Responses

  - Success

```
{
    status: "success"
    message: 'User Updated sful',
    "user": {
        "email": "example@mail.com",
        "firstname": "jon",
        "lastname": "doe",
        "phonemumber": "12345f678"
       }
    }
}
```

- error

```
{
    status: "error",
    message: 'error message',
}
```

---



### Delete User

- Route: /api/v1/users/<userID>
- Method: DELETE
- Body:


- Responses

  - Success

```
{
    status: "success"
    message: 'Successful
    "user": {
        null
       }
    }
}
```

- error

```
{
    status: "error",
    message: 'error message',
}
```

---




```

---

...

## Contributor

- Kelechi Okoronkwo(Blakcoder)
