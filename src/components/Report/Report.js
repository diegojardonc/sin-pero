import React from 'react';

import './Report.css';

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
                        </form></React.Fragment>) : (<h2>¡Reporte enviado!</h2>)
                }
            </div>
        );
    }
}