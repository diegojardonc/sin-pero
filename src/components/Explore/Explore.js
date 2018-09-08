import React, { Component } from 'react';

export default class Explore extends Component {
    constructor (props) {
        super(props);

        this.state = {
            places: []
        }
    }

    render () {
        return (
            <div className="explore">
                <h1>Explorar</h1>
            </div>
        );
    }
}