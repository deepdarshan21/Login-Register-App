const express = require("express");
const User = require("../models/Users");

const router = express.Router();

// Register
router.post("/register", (req, res) => {
    // res.send("Register Route");
    // console.log(req.body);
    const { name, email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User Already Exists" });
        } else {
            const user = new User({
                name,
                email,
                password,
            });
            user.save((err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({ message: "Successfully Registered" });
                }
            });
        }
    });
});

// Login
router.post("/login", (req, res) => {
    // res.send("Login Route");
    const { email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user });
            } else {
                res.send({ message: "Password didn't Match" });
            }
        } else {
            res.send({ message: "User Not Exits" });
        }
    });
});

module.exports = router;
