# Node.js Express MongoDB CRUD API

A simple RESTful CRUD API built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.

---

## 🚀 Features

- Create User
- Get All Users
- Get Single User
- Update User
- Delete User
- MongoDB Integration using Mongoose
- REST API

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
project/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── userController.js
│
├── models/
│   └── userModel.js
│
├── routes/
│   └── userRoutes.js
│
├── server.js
├── package.json
└── README.md
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
```

Go to the project directory

```bash
cd your-repository
```

Install dependencies

```bash
npm install
```

---

## ▶️ Run the Server

```bash
npm start
```

or

```bash
nodemon server.js
```

Server will start at

```
http://localhost:8000
```

---

## 🗄️ MongoDB Connection

Make sure MongoDB is running locally.

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/usersDB");
```

---

## 📌 API Endpoints

### Get All Users

```
GET /users
```

### Get Single User

```
GET /users/:id
```

### Create User

```
POST /users
```

Request Body

```json
{
  "firstName": "Atul",
  "lastName": "Jaiswal",
  "age": 21
}
```

### Update User

```
PUT /users/:id
```

### Delete User

```
DELETE /users/:id
```

---

## 📄 User Schema

```javascript
{
    firstName: String,
    lastName: String,
    age: Number
}
```

---

## 📷 Example Response

```json
{
    "_id": "6878d6b8e6d3c6c8f7b5d123",
    "firstName": "Atul",
    "lastName": "Jaiswal",
    "age": 21,
    "__v": 0
}
```

---

## 📖 Learning Objectives

- Express Routing
- Controllers
- Mongoose Schema
- MongoDB CRUD Operations
- REST API Development

---

## 👨‍💻 Author

**Subhkaran Jaiswal**

- GitHub: https://github.com/atulcodes-tech
- LinkedIn: https://www.linkedin.com/in/subhkaran-jaiswal

---

## ⭐ Show Your Support

If you found this project helpful, give it a ⭐ on GitHub.
