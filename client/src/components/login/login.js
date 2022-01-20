import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const login = () => {
        const { email, password } = user;
        axios
            .post("https://loginregisterappdeepdarshan.herokuapp.com/api/user/login", {
                email: email,
                password: password,
            })
            .then((res) => {
                // console.log(res);
                alert(res.data.message);
                setLoginUser(res.data.user);
                navigate("/");
            });
    };

    const register = () => {
        navigate("/register");
    };

    return (
        <div className="login">
            <h1>Login</h1>
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
            <button className="button" onClick={login}>
                Login
            </button>
            <div>or</div>
            <button className="button" onClick={register}>
                Register
            </button>
        </div>
    );
};

export default Login;
