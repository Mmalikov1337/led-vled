import React from 'react';
import ReactDOM from 'react-dom';
import {
    StartPage
} from './components/'

import './app.scss';

export default function App() {
    return (
        <div className='app'>
            <div className="app__container">
                <StartPage />

            </div>
        </div>
    )
}
