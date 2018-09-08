import React from 'react';
import { NavLink } from 'react-router-dom'; 

import SocialMedia from '../SocialMedia';

import './Footer.css';

export default function Footer () {
    return (
        <footer className="footer">
            <img src="http://placehold.it/360" className="footer__logo"/>
            <nav className="footer__menu">
                <NavLink to="/" className="footer__menu__item">Home</NavLink>
                <NavLink to="/" className="footer__menu__item">Acerca de</NavLink>
                <NavLink to="/" className="footer__menu__item">Trabajos</NavLink>
                <NavLink to="/" className="footer__menu__item">Link 4</NavLink>
                <NavLink to="/" className="footer__menu__item">Link 5</NavLink>
                <NavLink to="/" className="footer__menu__item">Link 6</NavLink>
            </nav>
            <SocialMedia />
        </footer>
    );
}
