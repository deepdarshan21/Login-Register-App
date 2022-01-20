const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./db");
// const User = require("./models/Users");
const users = require("./routes/users");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URI || config.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        () => {
            console.log("Database is Connected");
        },
        (err) => {
            console.error("Can't connect to database:" + err);
        }
    );

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
// });

// const User = new mongoose.model("user", userSchema);

// Routes
app.use("/api/user", users);
app.get("/", (req, res) => {
    res.send("hello");
});
// app.post("/login", (req, res) => {
//     // res.send("Login Route");
//     const { email, password } = req.body;
//     User.findOne({ email: email }, (err, user) => {
//         if (user) {
//             if (password === user.password) {
//                 res.send({ message: "Login Successfull", user: user });
//             } else {
//                 res.send({ message: "Password didn't Match" });
//             }
//         } else {
//             res.send({ message: "User Not Exits" });
//         }
//     });
// });
// app.post("/register", (req, res) => {
//     // res.send("Register Route");
//     // console.log(req.body);
//     const { name, email, password } = req.body;
//     User.findOne({ email: email }, (err, user) => {
//         if (user) {
//             res.send({ message: "User Already Exists" });
//         } else {
//             const user = new User({
//                 name,
//                 email,
//                 password,
//             });
//             user.save((err) => {
//                 if (err) {
//                     res.send(err);
//                 } else {
//                     res.send({ message: "Successfully Registered" });
//                 }
//             });
//         }
//     });
// });

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}/`);
});
