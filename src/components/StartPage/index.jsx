import React from 'react';
import { Route } from 'react-router-dom'

import StartPageHeader from './StartPageHeader/';
import StartPageComposition from './StartPageComposition/';
import StartPageSlider from './StartPageSlider';
import StartPageCatalog from './StartPageCatalog';
import Order from './Order';
// import Cart from './Order/Cart';

import './StartPage.scss';

export default function StartPage({ id, nextPage, link, toComposition, ChangeQuantity, tempItems }) {
	return (
		<React.Fragment>
			<div className="content" id={id}>
				<StartPageHeader />
				<Route exact path="/catalog" >
					<StartPageSlider nextPage={toComposition} />
					<StartPageCatalog link={link} ChangeQuantity={ChangeQuantity} tempItems={tempItems} />
				</ Route >
				<Route  path="/order" >
					<Order tempItems={tempItems} ChangeQuantity={ChangeQuantity} link={link}/>
					{/* <Cart tempItems={tempItems} ChangeQuantity={ChangeQuantity} /> */}
				</ Route>
				<Route exact path="/" >
					<StartPageComposition nextPage={nextPage} />
				</ Route >
			</div>
		</React.Fragment >

	)
}
