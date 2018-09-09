import React from 'react';

import Featured from '../Featured/Featured';
import About from '../About/About';
import TopPicks from '../TopPicks/TopPicks';
import QuickAccess from '../QuickAccess/QuickAccess'

import './Home.css';

export default function Home () {
    return (
        <div className="home">
            <Featured />
            <QuickAccess />
            <TopPicks />
            <About />
        </div>
    );
}