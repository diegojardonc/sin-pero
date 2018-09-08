import React, { Component } from 'react';

import './Navigation.css';

// TODO: handle sign in status


/* 
structure

.navigation
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
                    <i class="material-icons" style={{fontSize: '36px'}}>menu</i>
                </a>
                <a href="/">
                    <img src="http://placehold.it/36" className="navigation__logo"/>
                </a>
                <div className="user-menu">
                    <img src="http://placehold.it/36" className="user-menu__profile-picture"/>
                    <a className="user-menu__toggle-menu" onClick={this.toggleUserMenu}>
                        <i class="material-icons">arrow_drop_down</i>
                    </a>
                    {(this.state.isUserMenuHidden) ? null : (<div className="user-menu__menu">
                        <a className="user-menu__menu__item" href="#!">Perfil</a>
                        <a className="user-menu__menu__item" href="#!">Mis favoritos</a>
                        <a className="user-menu__menu__item" href="#!">Cerrar sesión</a>
                    </div>)}
                </div>
            </div>
            {
                (this.state.isMenuHidden) ? null :
                (
                    <div className="vertical-menu">
                        <a href="#!" className="vertical-menu__item">Inicio</a>
                        <a href="#!" className="vertical-menu__item">Explorar</a>
                        <a href="#!" className="vertical-menu__item">Preferencias</a>
                    </div>
                )
            }
            </React.Fragment>
        );
    }
}