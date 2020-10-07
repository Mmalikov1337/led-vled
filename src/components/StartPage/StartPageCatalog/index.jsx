import React from 'react'

import prod_1_5PNG from './../../../assets/images/1_5.png';
import prod_1_4PNG from './../../../assets/images/1_4.png';
import prod_1_3PNG from './../../../assets/images/1_3.png';
import prod_1_2PNG from './../../../assets/images/1_2.png';
import prod_1_1PNG from './../../../assets/images/1_1.png';
//1
import ice_cube_1 from './../../../assets/images/ice_cube_1.png';
import ice_cube_2 from './../../../assets/images/ice_cube_2.png';
import ice_cube_3 from './../../../assets/images/ice_cube_3.png';
import ice_cube_4 from './../../../assets/images/ice_cube_4.png';

import leaf_1 from './../../../assets/images/leaf_1.png';
import leaf_2 from './../../../assets/images/leaf_2.png';

import lemon_1 from './../../../assets/images/lemon_1.png';
import lemon_2 from './../../../assets/images/lemon_2.png';
import lemon_3 from './../../../assets/images/lemon_3.png';




import './StartPageCatalog.scss'

const Circle = ({ currentProduct }) => {
	return (
		<svg width={768} height={768} viewBox="0 0 1300 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className="circle__nav_arc zxc" d="M 635.0014632766333,1269.8185572376467 A 620,620 0 0, 1 120.72065205686215,972.8983924408526" strokeWidth={2} />
			<path data-slide={0} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 0 ? "active-line" : ""}`} d="M 635.0014632766333,1269.8185572376467 A 620,620 0 0, 1 120.72065205686215,972.8983924408526" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />
			<path className="circle__nav_arc" d="M 105.72211533349571,946.9201647967941 A 620,620 60 0, 1 105.7221153334956,353.079835203206" strokeWidth={2} />
			<path data-slide={1} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 1 ? "active-line" : ""}`} d="M 105.72211533349571,946.9201647967941 A 620,620 60 0, 1 105.7221153334956,353.079835203206" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />
			<path className="circle__nav_arc" d="M 120.72065205686226,327.1016075591472 A 620,620 120 0, 1 635.0014632766338,30.1814427623533" strokeWidth={2} />
			<path data-slide={2} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 2 ? "active-line" : ""}`} d="M 120.72065205686226,327.1016075591472 A 620,620 120 0, 1 635.0014632766338,30.1814427623533" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />
			<path className="circle__nav_arc" d="M 664.9985367233666,30.1814427623533 A 620,620 180 0, 1 1179.2793479431375,327.101607559147" strokeWidth={2} />
			<path data-slide={3} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 3 ? "active-line" : ""}`} d="M 664.9985367233666,30.1814427623533 A 620,620 180 0, 1 1179.2793479431375,327.101607559147" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />
			<path className="circle__nav_arc" d="M 1194.2778846665042,353.0798352032058 A 620,620 240 0, 1 1194.2778846665046,946.9201647967939" strokeWidth={2} />
			<path data-slide={4} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 4 ? "active-line" : ""}`} d="M 1194.2778846665042,353.0798352032058 A 620,620 240 0, 1 1194.2778846665046,946.9201647967939" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="1820.72" style={{ opacity: 1 }}>
			</path>
			<path className="circle__nav_arc" d="M 1179.2793479431384,972.8983924408517 A 620,620 300 0, 1 664.9985367233663,1269.8185572376467" strokeWidth={2} />
			<path data-slide={5} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 5 ? "active-line" : ""}`} d="M 1179.2793479431384,972.8983924408517 A 620,620 300 0, 1 664.9985367233663,1269.8185572376467" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />
			<circle className="homeSlider__navigationPin" data-slide={0} r={13} cx={650} cy={1270} strokeWidth={2} data-cy="sliderPin" style={{ transformOrigin: '0px 0px 0px' }} data-svg-origin="650 1270" transform="matrix(1,0,0,1,0,0)" tabIndex={0} focusable="true" />
			<circle className="homeSlider__navigationPinAfter" r={26} cx={650} cy={1270} strokeWidth={4} strokeDasharray={6} data-cy="sliderPinAfter" />
			<circle className="homeSlider__navigationPin" data-slide={1} r={13} cx="113.06424965364795" cy={960} strokeWidth={2} data-cy="sliderPin" tabIndex={0} focusable="true" style={{ transformOrigin: '0px 0px 0px' }} data-svg-origin="113.06424713134766 960" transform="matrix(1,0,0,1,0,0)" />
			<circle className="homeSlider__navigationPinAfter" r={26} cx="113.06424965364795" cy={960} strokeWidth={4} strokeDasharray={6} data-cy="sliderPinAfter" />
			<circle className="homeSlider__navigationPin" data-slide={2} r={13} cx="113.06424965364806" cy="339.99999999999994" strokeWidth={2} data-cy="sliderPin" tabIndex={0} focusable="true" style={{ transformOrigin: '0px 0px 0px' }} data-svg-origin="113.06424713134766 340" transform="matrix(1,0,0,1,0,0)" />
			<circle className="homeSlider__navigationPinAfter" r={26} cx="113.06424965364806" cy="339.99999999999994" strokeWidth={4} strokeDasharray={6} data-cy="sliderPinAfter" />
			<circle className="homeSlider__navigationPin homeSlider__navigationPin--active" data-slide={3} r={13} cx="649.9999999999999" cy={30} strokeWidth={2} data-cy="sliderPin" tabIndex={-1} focusable="true" style={{ transformOrigin: '0px 0px 0px' }} data-svg-origin="650 30" transform="matrix(1,0,0,1,0,0)">
			</circle>
			<circle className="homeSlider__navigationPinAfter" r={26} cx="649.9999999999999" cy={30} strokeWidth={4} strokeDasharray={6} data-cy="sliderPinAfter" />
			<circle className="homeSlider__navigationPin" data-slide={4} r={13} cx="1186.9357503463518" cy="339.9999999999997" strokeWidth={26} data-cy="sliderPin" tabIndex={0} focusable="true" style={{ transformOrigin: '0px 0px 0px' }} data-svg-origin="1186.935791015625 340" transform="matrix(0.7,0,0,0.7,356.08073730468755,102.00000000000003)" />
			<circle className="homeSlider__navigationPinAfter" r={26} cx="1186.9357503463518" cy="339.9999999999997" strokeWidth={4} strokeDasharray={6} data-cy="sliderPinAfter" />
			<circle className="homeSlider__navigationPin" data-slide={5} r={13} cx="1186.935750346352" cy="959.9999999999995" strokeWidth={2} data-cy="sliderPin" tabIndex={0} focusable="true" style={{ transformOrigin: '0px 0px 0px' }} data-svg-origin="1186.935791015625 960" transform="matrix(1,0,0,1,0,0)" />
			<circle className="homeSlider__navigationPinAfter" r={26} cx="1186.935750346352" cy="959.9999999999995" strokeWidth={4} strokeDasharray={6} data-cy="sliderPinAfter" />
		</svg>

	)
}

let tempProducts = [
	{
		title: "Лимон",
		image: prod_1_1PNG,
		color: "#FFC700",
		styles: [{
			background: `url(${ice_cube_4}) top 90px right 70% no-repeat,
			url(${ice_cube_3}) bottom right 40% no-repeat,
			url(${ice_cube_2}) bottom 250px right 20% no-repeat,
			url(${ice_cube_1}) center left 15% no-repeat`,
			backgroundSize: "72px 72px, 90px 82px, 98px 91px, 119px, 108px"
		}, {
			background: `url(${leaf_1}) bottom right 70% no-repeat,
			url(${leaf_2}) top 60px right 20% no-repeat`,
			backgroundSize: "214px 108px, 165px 150px"
		}, {
			background: `url(${lemon_1}) bottom 18% left no-repeat,
			url(${lemon_2}) bottom right 40% no-repeat,
			url(${lemon_3}) bottom 250px right 20% no-repeat`,
			backgroundSize: "250px 125px,250px 250px, 112px 161px"
		},]

	},{
		title: "Лимон",
		image: prod_1_1PNG,
		color: "#FFC700",
		styles: [{
			background: `url(${ice_cube_4}) top 90px right 70% no-repeat,
			url(${ice_cube_3}) bottom right 40% no-repeat,
			url(${ice_cube_2}) bottom 250px right 20% no-repeat,
			url(${ice_cube_1}) center left 15% no-repeat`,
			backgroundSize: "72px 72px, 90px 82px, 98px 91px, 119px, 108px"
		}, {
			background: `url(${leaf_1}) bottom right 70% no-repeat,
			url(${leaf_2}) top 60px right 20% no-repeat`,
			backgroundSize: "214px 108px, 165px 150px"
		}, {
			background: `url(${lemon_1}) bottom 18% left no-repeat,
			url(${lemon_2}) bottom right 40% no-repeat,
			url(${lemon_3}) bottom 250px right 20% no-repeat`,
			backgroundSize: "250px 125px,250px 250px, 112px 161px"
		},]

	},{
		title: "Лимон",
		image: prod_1_1PNG,
		color: "#FFC700",
		styles: [{
			background: `url(${ice_cube_4}) top 90px right 70% no-repeat,
			url(${ice_cube_3}) bottom right 40% no-repeat,
			url(${ice_cube_2}) bottom 250px right 20% no-repeat,
			url(${ice_cube_1}) center left 15% no-repeat`,
			backgroundSize: "72px 72px, 90px 82px, 98px 91px, 119px, 108px"
		}, {
			background: `url(${leaf_1}) bottom right 70% no-repeat,
			url(${leaf_2}) top 60px right 20% no-repeat`,
			backgroundSize: "214px 108px, 165px 150px"
		}, {
			background: `url(${lemon_1}) bottom 18% left no-repeat,
			url(${lemon_2}) bottom right 40% no-repeat,
			url(${lemon_3}) bottom 250px right 20% no-repeat`,
			backgroundSize: "250px 125px,250px 250px, 112px 161px"
		},]

	},{
		title: "Лимон",
		image: prod_1_1PNG,
		color: "#FFC700",
		styles: [{
			background: `url(${ice_cube_4}) top 90px right 70% no-repeat,
			url(${ice_cube_3}) bottom right 40% no-repeat,
			url(${ice_cube_2}) bottom 250px right 20% no-repeat,
			url(${ice_cube_1}) center left 15% no-repeat`,
			backgroundSize: "72px 72px, 90px 82px, 98px 91px, 119px, 108px"
		}, {
			background: `url(${leaf_1}) bottom right 70% no-repeat,
			url(${leaf_2}) top 60px right 20% no-repeat`,
			backgroundSize: "214px 108px, 165px 150px"
		}, {
			background: `url(${lemon_1}) bottom 18% left no-repeat,
			url(${lemon_2}) bottom right 40% no-repeat,
			url(${lemon_3}) bottom 250px right 20% no-repeat`,
			backgroundSize: "250px 125px,250px 250px, 112px 161px"
		},]

	},{
		title: "Лимон",
		image: prod_1_1PNG,
		color: "#FFC700",
		styles: [{
			background: `url(${ice_cube_4}) top 90px right 70% no-repeat,
			url(${ice_cube_3}) bottom right 40% no-repeat,
			url(${ice_cube_2}) bottom 250px right 20% no-repeat,
			url(${ice_cube_1}) center left 15% no-repeat`,
			backgroundSize: "72px 72px, 90px 82px, 98px 91px, 119px, 108px"
		}, {
			background: `url(${leaf_1}) bottom right 70% no-repeat,
			url(${leaf_2}) top 60px right 20% no-repeat`,
			backgroundSize: "214px 108px, 165px 150px"
		}, {
			background: `url(${lemon_1}) bottom 18% left no-repeat,
			url(${lemon_2}) bottom right 40% no-repeat,
			url(${lemon_3}) bottom 250px right 20% no-repeat`,
			backgroundSize: "250px 125px,250px 250px, 112px 161px"
		},]

	},{
		title: "Лимон",
		image: prod_1_1PNG,
		color: "#FFC700",
		styles: [{
			background: `url(${ice_cube_4}) top 90px right 70% no-repeat,
			url(${ice_cube_3}) bottom right 40% no-repeat,
			url(${ice_cube_2}) bottom 250px right 20% no-repeat,
			url(${ice_cube_1}) center left 15% no-repeat`,
			backgroundSize: "72px 72px, 90px 82px, 98px 91px, 119px, 108px"
		}, {
			background: `url(${leaf_1}) bottom right 70% no-repeat,
			url(${leaf_2}) top 60px right 20% no-repeat`,
			backgroundSize: "214px 108px, 165px 150px"
		}, {
			background: `url(${lemon_1}) bottom 18% left no-repeat,
			url(${lemon_2}) bottom right 40% no-repeat,
			url(${lemon_3}) bottom 250px right 20% no-repeat`,
			backgroundSize: "250px 125px,250px 250px, 112px 161px"
		},]

	},
]

const parallax = (event, targetArray) => {
	// console.log(event.clientX,);
	targetArray[0].current.style.transform = `translate(${event.clientX / 50}px, ${event.clientY / 50}px)`
	targetArray[1].current.style.transform = `translate(${event.clientX / 70}px, ${event.clientY / 70}px)`
	targetArray[2].current.style.transform = `translate(${event.clientX / 90}px, ${event.clientY / 90}px)`
	// console.log(targetArray[0].current.style);
}

const swipeDelay = 10000;

export default function StartPageCatalog() {
	const [currentProduct, setCurrentProduct] = React.useState(0)
	const ref0 = React.useRef(null)
	const ref1 = React.useRef(null)
	const ref2 = React.useRef(null)

	return (
		<div className="start_page_catalog" style={{ color: tempProducts[currentProduct].color }} onMouseMove={(event) => parallax(event, [ref0, ref1, ref2])}>
			<div className="start_page_catalog__background">
				<div className="start_page_catalog__layer1 layer" style={tempProducts[currentProduct].styles[0]} ref={ref0}></div>
				<div className="start_page_catalog__layer2 layer" style={tempProducts[currentProduct].styles[1]} ref={ref1}></div>
				<div className="start_page_catalog__layer3 layer" style={tempProducts[currentProduct].styles[2]} ref={ref2}></div>
			</div>

			<div className="start_page_catalog__wrapper">
				<div className="start_page_catalog__circle">
					<Circle currentProduct={currentProduct} />
				</div>

			</div>
			<button onClick={() => {setCurrentProduct(currentProduct - 1); console.log('-')}}>-</button><button onClick={() => setCurrentProduct(currentProduct + 1)}>+</button>
		</div>
	)
}
