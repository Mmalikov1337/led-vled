import React from 'react';
import {
	StartPage,
	Swiper
} from './components/'

import './app.scss';

export default function App() {

	return (
		<div className='app'>
			<div className="app__container">
				<StartPage />
			</div>
			<div className="app__container blue">
				<div className="app__container">
					<Swiper />
				</div>
			</div>
		</div>
	)
}
