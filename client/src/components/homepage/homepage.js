import "./homepage.css";

const Homepage = ({ setLoginUser, value }) => {
    const logout = () => {
        setLoginUser({});
    };
    return (
        <div className="homepage">
            <h1>Hello {value.name}</h1>
            <button className="button" onClick={logout}>
                Logout
            </button>
        </div>
    );
};

export default Homepage;
