import React from 'react'

import Composition from "./Composition";
import Usage from "./Usage";
import Price from "./Price";
import Delivery from "./Delivery";
import Tastes from "./Tastes";
import Partners from "./Partners";

import './Elements.scss';

export default function Elements({ toTop, toBottom, currentPage }) {
	function changeBlock(value) {
		if (value > 0)
			toTop();
		else
			toBottom();
	}

	let elementsList = [
		<Composition />,
		<Usage />,
		<Price />,
		<Delivery />,
		<Tastes />,
		<Partners />
	]
	return (
		<div className="elements" id="elements" onWheel={(e) => changeBlock(e.deltaY)}>
			{elementsList.map((it, index) => (
				<div className="opacity-toggler" style={{
					opacity: `${currentPage == index ? "1" : "0"}`,
					visibility: `${currentPage == index ? "visible" : "hidden"}`
				}}>
					{it}
				</div>
			))}
		</div>
	)
}