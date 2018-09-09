import React from 'react';

import './Place.css';

export default class Place extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            place: null
        }
    }

    componentDidMount () {
        const places = [
            {
                id: 1,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj'
            },
            {
                id: 2,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj'
            },
            {
                id: 3,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj'
            },
            {
                id: 4,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj'
            },
            {
                id: 5,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj'
            },
            {
                id: 6,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj'
            },
            {
                id: 7,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj'
            },
            {
                id: 8,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj'
            },
            {
                id: 9,
                name:'jaja',
                url: 'http://placehold.it/640x480',
                description: 'lorem',
                promo:'jajajaj'
            }
        ];

        this.setState({
            place: places.find(place => place.id === Number.parseInt(this.props.id))
        });
    }

    render () {
        return (
            (!this.state.place) ? (<h2>Loading...</h2>) : (
                <div className="place">
                    <img src={this.state.place.url} alt={this.state.place.name} className="place__img"/>
                    <div className="place__caption">
                        <h2 className="place__title">{this.state.place.name}</h2>
                        <p className="place__promo">{this.state.place.promo}</p>
                    </div>
                </div>
            )
        );
    }
}