import React, { Component } from 'react';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class Featured extends Component {
    constructor (props) {
        super(props);

        this.state = {
            places: [] 
        }

        this.fetchPlaces = this.fetchPlaces.bind(this);
    }

    fetchPlaces () {
        const places = [
            {
                original: 'http://placehold.it/640/480',
                thumbnail: 'http://placehold.it/64/48',
                description: 'lorem'
            },
            {
                original: 'http://placehold.it/640/480',
                thumbnail: 'http://placehold.it/64/48',
                description: 'lorem'
            },
            {
                original: 'http://placehold.it/640/480',
                thumbnail: 'http://placehold.it/64/48',
                description: 'lorem'
            }
        ];

        this.setState({
            places
        });
    }

    componentDidMount () {
        this.fetchPlaces();
    }

    render () {
        return (
            <div className="featured">
                <h1>Destacados</h1>
                <ImageGallery items={this.state.places} showThumbnails={false}/>
            </div>
        );
    }
}