import React, { Component } from 'react'

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './TopPicks.css';

export default class TopPicks extends Component {
    constructor (props) {
        super(props);

        this.state = {
            places: []
        }
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
            <div className="top-picks">
                <h2 className="top-picks__title">Lo más popular</h2>
                <ImageGallery items={this.state.places} autoPlay/>
            </div>
        );
    }
}
