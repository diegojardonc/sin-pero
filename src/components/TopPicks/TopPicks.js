import React, { Component } from 'react'

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './TopPicks.css';

import {places} from '../../dummy';

export default class TopPicks extends Component {
    constructor (props) {
        super(props);

        this.places = places;

        this.state = {
            places
        }
    }

    fetchPlaces () {
        this.setState({
            places: this.places
        });
    }

    componentDidMount () {
        this.fetchPlaces();
    }

    render () {
        return (
            <div className="top-picks">
                <h2 className="top-picks__title">Lo más popular</h2>
                <ImageGallery items={this.state.places} autoPlay ShowNav={false}/>
            </div>
        );
    }
}
