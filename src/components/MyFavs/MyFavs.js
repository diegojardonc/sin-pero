import React from 'react';

import { places } from '../../dummy';

import Place from '../Place/Place';
import { Link } from 'react-router-dom';

import './MyFavs.css';

export default class MyFavs extends React.Component {
    constructor (props) {
        super(props);

        this.places = places.slice(0, 3);
    }

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    render () {
        const places = this.places.map(place => (
            <Link to={'/lugar/'+place.id} style={
                {
                    textDecoration: 'none',
                    color: 'black'
                }
            }>
                <Place id={place.id}/>
                <h3>{place.nombre}</h3>
            </Link>
        ));
    
        return (
            <React.Fragment>
                <h1>Mis favoritos</h1>
                <div className="my-favs">
                    {places}
                </div>
            </React.Fragment>
        );
    }
}