import React from 'react';

import './Report.css';

import { Link } from 'react-router-dom';

export default class Report extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            sended: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit () {
        this.setState({
            sended: true
        })
    }

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <div className="report">
                {
                    (!this.state.sended) ?
                        (<React.Fragment><h1 className="report__title">¿Qué salió mal?</h1>
                        <form className="report__form" onSubmit={e => {
                            e.preventDefault();
                        }}>
                            <label htmlFor="report" className="report__form__option">Opción 1:
                                <input type="radio" name="option"/>
                            </label>
                            <label htmlFor="report" className="report__form__option">Opción 2:
                                <input type="radio" name="option"/>
                            </label>
                            <label htmlFor="report" className="report__form__option">Opción 3:
                                <input type="radio" name="option"/>
                                <textarea></textarea>
                            </label>
                            <button onClick={this.handleSubmit} type="submit" className="report__form__send">Enviar reporte</button>
                        </form></React.Fragment>) : (
                            <React.Fragment>
                                <h2>¡Reporte enviado!</h2>
                                <Link to='/' style={{color: '#FF6C2F'}}>Ir a inicio</Link>
                            </React.Fragment>
                        )
                }
            </div>
        );
    }
}