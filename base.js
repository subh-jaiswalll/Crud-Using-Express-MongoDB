

// const express = require("express");

// // const mongoose = require('mongoose')

// const app = express();

// const PORT = 8000;


// let users = [{
//     id : 1,
//     firstName : "Atul",
//     lastName : "Jaiswal",
//     age : 21
// }, 
// {
//     id : 2, 
//     firstName : "Rahul",
//     lastName : "Jaiswal",
//     age : 22
// }
// ]


// //  middleWare 

// app.use(express.json());

// //  Read 

// app.get("/", (req, res) => {
//   res.status(200).json(users);
// });


// //  Read By Id

// app.get("/:id", (req, res) => {

//     const id = Number(req.params.id);

//     const user = users.find((u) => u.id === id);

//     if (!user) {
//         return res.status(404).json({
//             message: "User Not Found"
//         });
//     }

//     res.json(user);

// });

// //  Create 

// app.post('/', (req, res) => {

//     const newUser = {
//         id : users.length + 1,
//         firstName : req.body.firstName,
//         lastName : req.body.lastName,
//         age : req.body.age
//     }

//     users.push(newUser);

//     res.status(201).json({
//         message : "User Created",
//         user : newUser
//     })
// })


// //  Update the User

// app.put('/:id', (req, res) => {

//     const id = Number(req.params.id);

//     const user = users.find((u) => u.id === id);


//     if(!user){
//         return res.status(404).json({
//             message : "User Not found"
//         })
//     }

//     user.firstName = req.body.firstName;
//     user.lastName = req.body.lastName;
//     user.age = req.body.age;

//     res.json({
//         message : "User Updated Successfully",
//         user
//     })
// })



// app.delete('/:id', (req, res) => {

//     const id = (Number)(req.params.id);

//     const user = users.find((u) => u.id === id);

//     if(user === -1){
//         res.status(404).json({
//             message : "User Not Found"
//         })
//     }

//     users.splice(user, 1);

//     res.json({
//         message : "User Deleted Successfully"
//     })


// })


// app.listen(PORT, () => console.log("App Started..."))