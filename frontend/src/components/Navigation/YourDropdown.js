import React, { useState } from "react";
// import { YourMenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import './Navigation.css';
import { useSelector } from "react-redux";

function YourDropdown() {

    const [click, setClick] = useState(false);

    const user = useSelector(state => state.session.user);

    const handleClick = () => setClick(!click);

    const YourMenuItems = [
        {
            title: 'Images',
            path: `/users/${user.id}/images`,
            cName: 'dropdown-link'
        },
        {
            title: 'Albums',
            path: `/users/${user.id}/albums`,
            cName: 'dropdown-link'
        }
    ];

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {YourMenuItems.map((item, index) => {
                    return (
                        <li key={index}>
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

export default YourDropdown;
