import { Link } from "react-router-dom";
import React, {Component} from "react";

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
                <Link className="navbar-brand ms-2" to="/books">
                    Library
                </Link>
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item mx-2 active">
                        <Link className="navLink btn btn-dark" to="/books">
                            Books
                        </Link>
                    </li>
                    <li className="nav-item mx-2 active">
                        <Link className="navLink btn btn-dark" to="/categories">
                            Categories
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header;
