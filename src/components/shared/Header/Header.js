import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    return (
        <header>
            <h1>To-do List</h1>
            <nav className="navMenu">
                <Link to="/">Home</Link>
                <Link to="/newToDo">Nova tarefa</Link>
                <div class="dot"></div>
            </nav>
        </header>
    );
};

export default Header;
