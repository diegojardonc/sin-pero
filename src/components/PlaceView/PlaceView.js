import React from 'react';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import './PlaceView.css';

export default class PlaceView extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            place: null
        }
    } 

    fetchPlaces () {
        const places = [
            {
                id: 1,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj',
                address: 'sdfasdfasdfasdfa blvd asdf St.'
            },
            {
                id: 2,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj',
                address: 'sdfasdfasdfasdfa blvd asdf St.'
            },
            {
                id: 3,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj',
                address: 'sdfasdfasdfasdfa blvd asdf St.'
            },
            {
                id: 4,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj',
                address: 'sdfasdfasdfasdfa blvd asdf St.'
            },
            {
                id: 5,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj',
                address: 'sdfasdfasdfasdfa blvd asdf St.'
            },
            {
                id: 6,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj',
                address: 'sdfasdfasdfasdfa blvd asdf St.'
            },
            {
                id: 7,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj',
                address: 'sdfasdfasdfasdfa blvd asdf St.'
            },
            {
                id: 8,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj',
                address: 'sdfasdfasdfasdfa blvd asdf St.'
            },
            {
                id: 9,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj',
                address: 'sdfasdfasdfasdfa blvd asdf St.'
            }
        ];

        this.setState({
            place: places.find(place => place.id === this.props.id)
        });
    }

    componentDidMount () {
        this.fetchPlaces();
    }

    render () {
        const images = [
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
        ]

        return (
            <React.Fragment>
                {(!this.state.place) ? 'Loading...' : (
                    <div className="place-view">
                        <h2 className="place-view__name">{this.state.place.name}</h2>
                        {/* <img className="place-view__" alt={this.state.place.name} src={this.state.place.url}/> */}
                        <ImageGallery showThumbnails={false} items={images}/>
                        <p className="place-view__promo">{this.state.place.promo}</p>
                        <div className="place-view__contact">
                            <span>{this.state.place.phone}</span>
                            <span>{this.state.place.address}</span>
                        </div>
                        <img alt={this.state.place.name} className="place-view__location" src="https://i.stack.imgur.com/4rieu.png"/>
                        <div className="place-view__actions">
                            <button title="Add to favs" className="place-view__like">
                                <i className="far fa-heart"></i>
                            </button>
                            <button title="Reportar" className="place-view__report">Reportar</button>
                        </div>
                    </div>
                )}
             </React.Fragment>
        );
    }
}