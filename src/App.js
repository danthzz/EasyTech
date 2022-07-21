import React from "react";
import Login from "./components/Login";
import "./App.css";
import { selectUser } from "./freatures/userSlice";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";

const App = () => {
    const user = useSelector(selectUser)

    return <div>{user ? <Logout /> : <Login />}</div>
};

export default App