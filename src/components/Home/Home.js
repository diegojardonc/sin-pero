import React from 'react';

import Featured from '../Featured/Featured';
import About from '../About/About';
import TopPicks from '../TopPicks/TopPicks';

import './Home.css';

export default function Home () {
    return (
        <div className="home">
            <Featured />
            <TopPicks />
            <About />
        </div>
    );
}