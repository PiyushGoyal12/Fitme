import React from "react";
import "./navbar.css";
const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <h1>FitMe</h1>
                </div>
                <div className="links">
                    <ul className="options">
                        <li>
                            <a> Home</a>
                        </li>
                        <li>Schedule</li>
                        <li>log out</li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default Navbar;
