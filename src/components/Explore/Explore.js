import React, { Component } from 'react';

import Featured from '../Featured/Featured';
import Place from '../Place/Place';
import { Link } from 'react-router-dom';
import './Explore.css';

export default class Explore extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isHiddenFilters: true,
            places: []
        }

        this.toggleFilters = this.toggleFilters.bind(this);
        this.fetchPlaces = this.fetchPlaces.bind(this);

        this.fetchPlaces();
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
            places
        });
    }

    toggleFilters () {
        this.setState(prevState => ({
            isHiddenFilters: !prevState.isHiddenFilters
        }));
    }

    componentDidMount () {
        this.fetchPlaces();
    }

    render () {
        const places = 
            this.state
                .places
                .map((place, index) => (
                    <Link to={'/lugar/'+place.id}>
                        <Place id={place.id} key={index}/>
                    </Link>
                ))

        return (
            <div className="explore">
                <h1 className="explore__title">Explorar</h1>
                <form className="explore__search-form" onSubmit={(e) => {e.preventDefault()}}>
                    <input type="text" placeholder="¿Buscas algo?" className="explore__search__name" name="name"/>
                    <button className="explore__search__submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                <h4 className="explore__filters-title" onClick={this.toggleFilters}>
                    Filtros {(this.state.isHiddenFilters) ? (<i class="fas fa-plus"></i>) : (<i class="fas fa-minus"></i>)}
                </h4>
                {
                    (this.state.isHiddenFilters) ? null : (
                        <form className="explore__filters" onSubmit={(e) => {e.preventDefault()}}>
                            <label for="date" className="explore__filters__filter">
                                ¿Para cuándo?
                                <input name="date" type="date"/>
                            </label>
                            <label for="zone" className="explore__filters__filter">
                                ¿En dónde? 
                                <input name="zone" type="number" placeholder="Código postal"/>
                            </label>
                        </form>
                    )
                }
                <div className="explore__grid-view">
                    {places}
                </div>
                <Featured />
            </div>
        );
    }
}