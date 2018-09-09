import React from 'react';

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
            place: places.find(place => place.id === this.props.id)
        });
    }

    componentDidMount () {
        this.fetchPlaces();
    }

    render () {
        return (
            <React.Fragment>
                {(!this.state.place) ? 'Loading...' : (
                    <div className="place-view">
                        <h2>{this.state.place.name}</h2>
                        <img src={this.state.place.url}/>
                        <p>{this.state.place.promo}</p>
                        <span>{this.state.place.phone}</span>
                        <img src="https://i.stack.imgur.com/4rieu.png"/>
                    </div>
                )}
            </React.Fragment>
        );
    }
}