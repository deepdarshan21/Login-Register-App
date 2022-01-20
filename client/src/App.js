import "./App.css";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Homepage from "./components/homepage/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
    const [user, setUser] = useState({});
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={
                            user && user._id ? (
                                <Homepage value={user} setLoginUser={setUser} />
                            ) : (
                                <Login setLoginUser={setUser} />
                            )
                        }
                    />
                    <Route path="/login" exact element={<Login setLoginUser={setUser} />} />
                    <Route path="/register" exact element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
