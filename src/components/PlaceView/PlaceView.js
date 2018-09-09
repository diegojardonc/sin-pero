import React from 'react';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import { Link } from 'react-router-dom';
import { places } from '../../dummy';

import './PlaceView.css';

export default class PlaceView extends React.Component {
    constructor (props) {
        super(props);

        this.places = places;

        this.state = {
            place: null
        }
    } 

    fetchPlaces () {
        const places = this.places;

        this.setState({
            place: places.find(place => place.id === this.props.id)
        });
    }

    componentDidMount () {
        this.fetchPlaces();
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <React.Fragment>
                {(!this.state.place) ? 'Loading...' : (
                    <div className="place-view">
                        <h2 className="place-view__name">{this.state.place.nombre}</h2>
                        <img src={this.state.place.original}/>
                        <p className="place-view__promo">{this.state.place.promocion}</p>
                        <div className="place-view__contact">
                            <span>{this.state.place.phone}</span>
                            <span>{this.state.place.address}</span>
                        </div>
                        <img alt={this.state.place.name} className="place-view__location" src="https://i.stack.imgur.com/4rieu.png"/>
                        <div className="place-view__actions">
                            <button title="Add to favs" className="place-view__like">
                                <i className="far fa-heart"></i>
                            </button>
                            <Link to={"/reportar/"+this.state.place.id}>
                                <button title="Reportar" className="place-view__report">Reportar</button>
                            </Link>
                        </div>
                    </div>
                )}
             </React.Fragment>
        );
    }
}