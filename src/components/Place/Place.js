import React from 'react';

import './Place.css';

import {places} from '../../dummy';

export default class Place extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            place: null
        }

        this.places = places;
    }


    componentDidMount () {
        const places = this.places;

        this.setState({
            place: places.find(place => place.id === Number.parseInt(this.props.id))
        });
    }

    render () {
        return (
            (!this.state.place) ? (<h2>Loading...</h2>) : (
                <div className="place">
                    <img src={this.state.place.original} alt={this.state.place.name} className="place__img"/>
                    <div className="place__caption">
                        <h2 className="place__title">{this.state.place.name}</h2>
                        <p className="place__promo">{this.state.place.promo}</p>
                    </div>
                </div>
            )
        );
    }
}