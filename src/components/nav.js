
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import Logo from'../images/bluelogo.png';

const Nav = () => {
  return (
    <div className="dash">
        <div className="logo">
            <img src={Logo} alt='image'/>
        </div>
        <div className="nav">
            <ul>
                <li><Link to={"/Auth"}>Login</Link></li>

                <li><Link to={"/Main"}>Main</Link></li>

            </ul>
        </div>
    </div>
  );
};

export default Nav;
