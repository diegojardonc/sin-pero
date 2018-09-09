import React, { Component } from 'react';

import ImageGallery from 'react-image-gallery';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import './Featured.css';
import 'react-image-gallery/styles/css/image-gallery.css';

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
                <h1 className="featured__title">Destacados</h1>
                <Tabs>
                    <TabList>
                        <Tab><i title="Restaurantes" className="fas fa-utensils"></i></Tab>
                        <Tab><i title="Bares" className="fas fa-glass-martini"></i></Tab>
                        <Tab><i title="Actividades" className="fas fa-bowling-ball"></i></Tab>
                    </TabList>
                    <TabPanel>
                        <h2 className="featured__category__title">Restaurantes</h2>
                        <ImageGallery autoPlay slideInterval={5000} items={this.state.places} showThumbnails={false}/>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="featured__category__title">Bares</h2>
                        <ImageGallery autoPlay slideInterval={5000} items={this.state.places} showThumbnails={false}/>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="featured__category__title">Actividades</h2>
                        <ImageGallery autoPlay slideInterval={5000} items={this.state.places} showThumbnails={false}/>
                    </TabPanel>
                </Tabs>
                <div className="featured__info">
                    <h3 className="featured__info__title">Occaecat qui pariatur.</h3>
                    <p className="featured__info__description">Ea ad tempor cillum culpa magna dolor aliquip in quis nostrud excepteur mollit proident adipisicing. Veniam nulla labore eu labore fugiat non. Occaecat enim ea est ex quis dolore occaecat est. Reprehenderit ex sunt aliquip veniam cupidatat officia consequat ut. Anim occaecat ullamco aliquip cupidatat est pariatur. Tempor do incididunt reprehenderit magna excepteur labore officia irure nisi exercitation.</p>
                    <span><b>Teléfono:</b> 551 555 55 55</span> <br/>
                    <span><b>Ubicación</b> Elit dolor ex ipsum officia officia veniam irure sunt dolore sit cupidatat.</span>
                    <Link to="/explorar/todos" className="featured__all">Ver todos</Link>
                </div>
            </div>
        );
    }
}