import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navigation.css';

// TODO: handle sign in status


/* 
structure

.navigation
    .show-menu
    .menu
        .menu-item
    .logo
    .user-menu
        .profile-picture
        .menu
*/

export default class Navigation extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isMenuHidden: true,
            isUserMenuHidden: true
        }

        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleUserMenu = this.toggleUserMenu.bind(this);
    }

    toggleMenu () {
        this.setState(prevState => ({
            isMenuHidden: !prevState.isMenuHidden
        }));
    }

    toggleUserMenu () {
        this.setState(prevState => ({
            isUserMenuHidden: !prevState.isUserMenuHidden
        }));
    }

    render () {
        return (
            <React.Fragment>
            <div className="navigation">
                <a className="navigation__logo" href="#!" onClick={this.toggleMenu}>
                    <i className="material-icons" style={{fontSize: '36px'}}>menu</i>
                </a>
                <Link to="/">
                    <img src="http://placehold.it/36" className="navigation__logo"/>
                </Link>
                <div className="user-menu">
                    <img src="http://placehold.it/36" className="user-menu__profile-picture"/>
                    <a className="user-menu__toggle-menu" onClick={this.toggleUserMenu}>
                        <i className="material-icons">arrow_drop_down</i>
                    </a>
                    {(this.state.isUserMenuHidden) ? null : (<div className="user-menu__menu">
                        <Link onClick={this.toggleUserMenu} className="user-menu__menu__item" to="/">Perfil</Link>
                        <Link onClick={this.toggleUserMenu} className="user-menu__menu__item" to="/mis-favoritos">Mis favoritos</Link>
                        <Link onClick={this.toggleUserMenu} className="user-menu__menu__item" to="/">Cerrar sesión</Link>
                    </div>)}
                </div>
            </div>
            {
                (this.state.isMenuHidden) ? null :
                (
                    <div className="vertical-menu">
                        <NavLink onClick={this.toggleMenu} activeStyle={{textDecoration: 'underline'}} to="/" className="vertical-menu__item">Inicio</NavLink>
                        <NavLink onClick={this.toggleMenu} activeStyle={{textDecoration: 'underline'}} to="/explorar" className="vertical-menu__item">Explorar</NavLink>
                        <NavLink onClick={this.toggleMenu} activeStyle={{textDecoration: 'underline'}} to="/" className="vertical-menu__item">Preferencias</NavLink>
                    </div>
                )
            }
            </React.Fragment>
        );
    }
}