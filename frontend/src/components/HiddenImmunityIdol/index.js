import React from "react";
import { Link } from "react-router-dom";
import './HiddenImmunityIdol.css';

const HiddenImmunityIdol = () => {
    return (
        <div className="idol-container">
            <img className="idol-img" src={require('../../images/idol.jpg')}></img>
        </div>
    )
}

export default HiddenImmunityIdol;
