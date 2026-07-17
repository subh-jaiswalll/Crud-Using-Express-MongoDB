const User = require("../Model/users");

// CREATE
const createUser = async (req, res) => {

    try {

        const user = await User.create(req.body);

        res.status(201).json(user);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }

};

// GET ALL
const getUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.json(users);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }

};

// GET SINGLE
const getUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.json(user);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }

};

// UPDATE
const updateUser = async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.json(user);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }

};

// DELETE
const deleteUser = async (req, res) => {

    try {

        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.json({
            message: "User Deleted Successfully"
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }

};

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};