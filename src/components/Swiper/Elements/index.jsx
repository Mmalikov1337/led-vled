import React from 'react'

import Composition from "./Composition";
import Usage from "./Usage";

import './Elements.scss'
export default function Elements({ toTop, toBottom }) {

	function z(value) {
		if (value > 0)
			toTop();
		else
			toBottom();

		// console.log(e);
	}

	return (
		<div className="elements" id="elements" onWheel={(e) => z(e.deltaY)}>
			<Composition />
			<Usage />
		</div>
	)
}