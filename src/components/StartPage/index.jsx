import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import StartPageHeader from './StartPageHeader/';
import StartPageComposition from './StartPageComposition/';
import StartPageCatalog from './StartPageCatalog/';

import germanySVG from './../../assets/images/germany.svg';

import bodySVG from './../../assets/images/body.svg';
import drinkSVG from './../../assets/images/drink.svg';

import starSVG from './../../assets/images/star_full.svg';
import arrow_downSVG from './../../assets/images/arrow_down.svg';
import shadowPNG from './../../assets/images/shadow.png';
import prod_1_5PNG from './../../assets/images/1_5.png';
import prod_1_4PNG from './../../assets/images/1_4.png';
import prod_1_3PNG from './../../assets/images/1_3.png';
import prod_1_2PNG from './../../assets/images/1_2.png';
import prod_1_1PNG from './../../assets/images/1_1.png';

import './StartPage.scss'

const Circle = ({ color, width, height }) => {
	return (
		<svg width={width} height={height} viewBox="0 0 582 582" xmlns="http://www.w3.org/2000/svg" >

			<circle id="svg_1" fill={color} cx="291" cy="291" r="291" viewBox="0 0 582 582" />
			<g id="svg_19">
				<path fillRule="evenodd" clipRule="evenodd" d="M241.815 61.409L291.527 147.581L341.324 61.3303C389.157 71.721 432.551 96.7749 465.466 133.004L415.669 219.255L515.182 219.237C530.139 265.865 530.123 316.017 515.135 362.654L415.606 362.682L465.356 448.872C432.465 485.171 389.041 510.26 341.182 520.614L291.435 434.435L241.646 520.672C193.822 510.26 150.433 485.209 117.504 448.998L167.292 362.761L67.8154 362.785C52.839 316.162 52.8513 266.007 67.8508 219.372L167.351 219.352L117.629 133.154C150.52 96.8475 193.95 71.7573 241.815 61.409Z" fill="white" fillOpacity="0.3" />
			</g>

		</svg>
	)
}

export default function StartPage({ id, nextPage }) {
	return (
		<React.Fragment>
			<div className="content" id={id}>
				<BrowserRouter>
					<StartPageHeader />
					<Route exact path="/catalog" >
						<StartPageCatalog/>
					</ Route >
					<Route exact path="/" >
						{/* {StartPageComposition(nextPage)} */}
						<StartPageComposition nextPage={nextPage} />
					</ Route >

				</ BrowserRouter>
			</div>

		</React.Fragment >

	)
}
