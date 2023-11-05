import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={require("./logo.png")} alt="" width="150" height="150"/>
                        <h1 className="header__title">HawkTech</h1>
                </div>

                <div class="header_links__container">
                    <ul>
                        <nav><Link to="/">Home</Link></nav>
                        <nav><Link to="/funcionarios">Funcionários</Link></nav>
                    </ul>
                </div>

                <div className="logo">
                    <nav id="userLink"></nav>
                    <p id="username"></p>
                </div>
            </header>
        </>
    );
}

export default Header;
