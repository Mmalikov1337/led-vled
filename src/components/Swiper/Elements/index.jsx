import React from 'react'

import Composition from "./Composition";
import Usage from "./Usage";
import Price from "./Price";
import Delivery from "./Delivery";

import './Elements.scss'
export default function Elements({ toTop, toBottom }) {

	function z(value) {
		if (value > 0)
			toTop();
		else
			toBottom();
	}

	return (
		<div className="elements" id="elements" onWheel={(e) => z(e.deltaY)}>
			<Composition />
			<Usage />
			<Price />
			<Delivery />
		</div>
	)
}