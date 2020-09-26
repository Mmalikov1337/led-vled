import React from 'react'

import Composition from "./Composition";
import Usage from "./Usage";

import './Elements.scss'
export default function Elements() {



	return (
		<div className="elements" id="el">
			{/* <> */}
			<Composition />
			<Usage />
			{/* </> */}

		</div>
	)
}