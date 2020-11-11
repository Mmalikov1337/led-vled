import React from 'react';
import { Route } from 'react-router-dom'

import StartPageHeader from './StartPageHeader/';
import StartPageComposition from './StartPageComposition/';
import StartPageSlider from './StartPageSlider';
import StartPageCatalog from './StartPageCatalog';
import Order from './Order';
// import Cart from './Order/Cart';

import './StartPage.scss';

export default function StartPage({ id, nextPage, link, toComposition, ChangeQuantity, tempItems, links, prewPage }) {
	return (
		<React.Fragment>
			<div className="content" id={id}>
				<StartPageHeader />
				<Route exact path="/catalog" >
					<StartPageSlider nextPage={toComposition} links={links} prewPage={prewPage} />
					<StartPageCatalog link={link} ChangeQuantity={ChangeQuantity} tempItems={tempItems} />
				</ Route >
				<Route path="/order" >
					<Order tempItems={tempItems} ChangeQuantity={ChangeQuantity} link={link} />
					{/* <Cart tempItems={tempItems} ChangeQuantity={ChangeQuantity} /> */}
				</ Route>
				<Route exact path="/" >
					<StartPageComposition nextPage={nextPage} links={links} />
				</ Route >
			</div>
		</React.Fragment >

	)
}
