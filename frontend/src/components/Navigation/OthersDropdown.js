import React, { useState } from "react";
import { OthersMenuItems } from './MenuItems';
import { Link } from "react-router-dom";
import './Navigation.css';

function OthersDropdown() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                <p className="dropdown-pointer">^</p>
                {OthersMenuItems.map((item, index) => {
                    return (
                        <li className="dropdown-link-container" key={index}>
                            <Link
                                className={item.cName}
                                to={item.path}
                                onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default OthersDropdown;
