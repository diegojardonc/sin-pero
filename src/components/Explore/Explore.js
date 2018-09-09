import React, { Component } from 'react';

import Featured from '../Featured/Featured';
import Place from '../Place/Place';
import { Link } from 'react-router-dom';
import './Explore.css';

import {places} from '../../dummy';

export default class Explore extends Component {

    constructor (props) {
        super(props);

        this.places = places;

        this.state = {
            isHiddenFilters: true,
            places: []
        }

        this.toggleFilters = this.toggleFilters.bind(this);
        this.fetchPlaces = this.fetchPlaces.bind(this);

        this.fetchPlaces();
    }

    fetchPlaces () {
        this.setState({
            places: this.places
        })
    }

    toggleFilters () {
        this.setState(prevState => ({
            isHiddenFilters: !prevState.isHiddenFilters
        }));
    }

    componentDidMount () {
        window.scrollTo(0, 0);
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
                        <i className="fas fa-search"></i>
                    </button>
                </form>
                <h4 className="explore__filters-title" onClick={this.toggleFilters}>
                    Filtros {(this.state.isHiddenFilters) ? (<i className="fas fa-plus"></i>) : (<i className="fas fa-minus"></i>)}
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