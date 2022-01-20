import "./register.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        rePassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const register = () => {
        const { name, email, password, rePassword } = user;
        if (name && email && password && password === rePassword) {
            // alert("Registered");
            axios
                .post("https://loginregisterappdeepdarshan.herokuapp.com/api/user/register", {
                    name: name,
                    email: email,
                    password: password,
                })
                .then((res) => {
                    // console.log(res);
                    alert(res.data.message);
                    navigate("/login");
                });
        } else {
            alert("Invalid Input");
        }
    };

    const login = () => {
        navigate("/login");
    };

    return (
        <div className="register">
            <h1>Register</h1>
            <input
                type="text"
                name="name"
                value={user.name}
                placeholder="Enter Your Name"
                onChange={handleChange}
            />
            <input
                type="text"
                name="email"
                value={user.email}
                placeholder="Enter Your Email"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={user.password}
                placeholder="Enter Your Password"
                onChange={handleChange}
            />
            <input
                type="password"
                name="rePassword"
                value={user.rePassword}
                placeholder="Re-Enter Your Password"
                onChange={handleChange}
            />
            <button className="button" onClick={register}>
                Register
            </button>
            <div>or</div>
            <button className="button" onClick={login}>
                Login
            </button>
        </div>
    );
};

export default Register;
