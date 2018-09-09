import React from 'react';

import Featured from '../Featured/Featured';
import About from '../About/About';
import TopPicks from '../TopPicks/TopPicks';
import QuickAccess from '../QuickAccess/QuickAccess'

import './Home.css';

export default class Home extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <div className="home">
                <Featured/>
                <QuickAccess />
                <TopPicks />
                <About />
            </div>
        );
    }
}