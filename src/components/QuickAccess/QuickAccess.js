import React from 'react';

import { Link } from 'react-router-dom';
import './QuickAccess.css';

export default function QuickAccess () {
    return (
        <div className="quick-access">
            <h2 className="quick-access__title">Acceso rápido</h2>
            <div className="quick-access__links">
                <Link className="quick-access__item" to="/explorar">Explorar</Link>
                <Link className="quick-access__item" to="/favoritos">Mis favoritos</Link>
            </div>
        </div>
    );
}