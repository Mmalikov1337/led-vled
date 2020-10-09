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
//2
import cherry2_1 from './../../../assets/images/cherry2_1.png';
import cherry2_2 from './../../../assets/images/cherry2_2.png';
import cherry2_3 from './../../../assets/images/cherry2_3.png';

import leaf2_1 from './../../../assets/images/leaf2_1.png';
import leaf2_2 from './../../../assets/images/leaf2_2.png';
import leaf2_3 from './../../../assets/images/leaf2_3.png';
import leaf2_4 from './../../../assets/images/leaf2_4.png';
/* + Кубики льда */
//3
import cola_bg from './../../../assets/images/cola_bg.png';
import cola_cup from './../../../assets/images/cola_cup.png';






import './StartPageCatalog.scss'

const Circle = ({ currentProduct, circleFill }) => {
	return (
		<svg width={768} height={768} viewBox="0 0 1300 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
			{/* <svg > */}
			<circle cx={1300 / 2} cy={1300 / 2} r={620} fill = {circleFill} viewBox="0 0 1300 1300" />

			<path className="circle__nav_arc zxc" d="M 635.0014632766333,1269.8185572376467 A 620,620 0 0, 1 120.72065205686215,972.8983924408526" strokeWidth={2} />
			<path data-slide={0} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 0 ? "active-line" : ""}`} d="M 635.0014632766333,1269.8185572376467 A 620,620 0 0, 1 120.72065205686215,972.8983924408526" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />
			<path className="circle__nav_arc" d="M 105.72211533349571,946.9201647967941 A 620,620 60 0, 1 105.7221153334956,353.079835203206" strokeWidth={2} />
			<path data-slide={1} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 1 ? "active-line" : ""}`} d="M 105.72211533349571,946.9201647967941 A 620,620 60 0, 1 105.7221153334956,353.079835203206" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />
			<path className="circle__nav_arc" d="M 120.72065205686226,327.1016075591472 A 620,620 120 0, 1 635.0014632766338,30.1814427623533" strokeWidth={2} />
			<path data-slide={2} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 2 ? "active-line" : ""}`} d="M 120.72065205686226,327.1016075591472 A 620,620 120 0, 1 635.0014632766338,30.1814427623533" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />
			<path className="circle__nav_arc" d="M 664.9985367233666,30.1814427623533 A 620,620 180 0, 1 1179.2793479431375,327.101607559147" strokeWidth={2} />
			<path data-slide={3} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 3 ? "active-line" : ""}`} d="M 664.9985367233666,30.1814427623533 A 620,620 180 0, 1 1179.2793479431375,327.101607559147" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />
			<path className="circle__nav_arc" d="M 1194.2778846665042,353.0798352032058 A 620,620 240 0, 1 1194.2778846665046,946.9201647967939" strokeWidth={2} />
			<path data-slide={4} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 4 ? "active-line" : ""}`} d="M 1194.2778846665042,353.0798352032058 A 620,620 240 0, 1 1194.2778846665046,946.9201647967939" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }}>
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
			<circle className="homeSlider__navigationPin _2" data-slide={4} r={13} cx="1186.9357503463518" cy="339.9999999999997" strokeWidth={26} data-cy="sliderPin" tabIndex={0} focusable="true" style={{ transformOrigin: '0px 0px 0px' }} data-svg-origin="1186.935791015625 340" transform="matrix(1,0,0,1,0,0)" />
			<circle className="homeSlider__navigationPinAfter" r={26} cx="1186.9357503463518" cy="339.9999999999997" strokeWidth={4} strokeDasharray={6} data-cy="sliderPinAfter" />
			<circle className="homeSlider__navigationPin" data-slide={5} r={13} cx="1186.935750346352" cy="959.9999999999995" strokeWidth={2} data-cy="sliderPin" tabIndex={0} focusable="true" style={{ transformOrigin: '0px 0px 0px' }} data-svg-origin="1186.935791015625 960" transform="matrix(1,0,0,1,0,0)" />
			<circle className="homeSlider__navigationPinAfter" r={26} cx="1186.935750346352" cy="959.9999999999995" strokeWidth={4} strokeDasharray={6} data-cy="sliderPinAfter" />
			{/* </svg> */}
			{/* <g id="svg_19"> */}
			{/* <path fillRule="evenodd" clipRule="evenodd" d="M241.815 61.409L291.527 147.581L341.324 61.3303C389.157 71.721 432.551 96.7749 465.466 133.004L415.669 219.255L515.182 219.237C530.139 265.865 530.123 316.017 515.135 362.654L415.606 362.682L465.356 448.872C432.465 485.171 389.041 510.26 341.182 520.614L291.435 434.435L241.646 520.672C193.822 510.26 150.433 485.209 117.504 448.998L167.292 362.761L67.8154 362.785C52.839 316.162 52.8513 266.007 67.8508 219.372L167.351 219.352L117.629 133.154C150.52 96.8475 193.95 71.7573 241.815 61.409Z" fill="white" fillOpacity="0.3" /> */}

			{/* </g> */}

		</svg>

	)
}

let tempProducts = [
	{
		title: "Лимон",
		image: prod_1_2PNG,
		color: "#FFC700",
		circleFill: "transparent",
		ccal: "21 ккал",
		ml: "200 мл",
		parallaxOptions: [{x:1, y:1},{x:1, y:1},{x:1, y:1},],
		styles: [{
			background: `url(${ice_cube_4}) top 90px right 70% /
			72px 72px 
			no-repeat,
			url(${ice_cube_3}) bottom right 40% /
			90px 82px 
			no-repeat,
			url(${ice_cube_2}) bottom 250px right 20% / 
			98px 91px 
			no-repeat,
			url(${ice_cube_1}) center left 15% / 
			119px 108px 
			no-repeat`,
			// backgroundSize: "72px 72px, 90px 82px, 98px 91px, 119px, 108px"
		}, {
			background: `url(${leaf_1}) bottom 55px right 70% / 
			214px 108px
			no-repeat,
			url(${leaf_2}) top 60px right 20% /
			165px 150px 
			no-repeat`,
			// backgroundSize: "214px 108px, 165px 150px"
		}, {
			background: `url(${lemon_1}) bottom 18% left /
			250px 125px 
			no-repeat,
			url(${lemon_2}) top 60% left 38% /
			250px 250px 
			no-repeat,
			url(${lemon_3}) bottom 250px right 20%  / 
			112px 161px 
			no-repeat`,
			// backgroundSize: "250px 125px,250px 250px, 112px 161px"
		},]

	}, {
		title: "Вишня",
		image: prod_1_1PNG,
		color: "#FF4E5A",
		circleFill: "transparent",
		ccal: "21 ккал",
		ml: "200 мл",
		parallaxOptions: [{x:1, y:1},{x:1, y:1},{x:1, y:1},],
		styles: [{
			background: `url(${ice_cube_4}) bottom 80px left 25% /
			72px 72px
			no-repeat,
			url(${ice_cube_1}) top 90px right 20% / 
			112px 101px
			no-repeat,
			url(${ice_cube_1}) top 242px left 15% /
			112px 101px 
			no-repeat`,
			// backgroundSize: "72px 72px, 90px 82px, 98px 91px"
		},
		{
			background: `url(${leaf2_1}) bottom right 70% /
			116px 173px
			no-repeat,
			url(${leaf2_2}) bottom 200px right 40% / 
			88px 130px
			no-repeat,
			url(${leaf2_3}) center left 23% /
			69px 104px 
			no-repeat,
			url(${leaf2_4}) bottom 100px right 23% /
			44px 66px
			no-repeat,
			url(${leaf2_4}) top 100px right 40% / 
			22px 35px 
			no-repeat`,

			// backgroundSize: "116px 173px, 88px 130px, 69px 104px, 22px, 35px"
		}, {
			background: `url(${cherry2_1}) top 200px right 45% /
			136px 129px
			no-repeat,
			url(${cherry2_2}) bottom 350px left 17% / 
			96px 94px
			no-repeat,
			url(${cherry2_3})  top 60% left 38% /
			139px 179px 
			no-repeat`,

			// backgroundSize: "116px 173px, 88px 130px, 69px 104px, 22px, 35px"
		},
		]

	}, {
		title: "Кола",
		image: prod_1_5PNG,
		color: "#230D07",
		circleFill: "#230D07",
		ccal: "21 ккал",
		ml: "200 мл",
		parallaxOptions: [{x:1, y:0},{x:1, y:1},{x:1, y:1},],
		styles: [{
			background: `url(${cola_cup}) center right 65px /
			auto 100%
			no-repeat,
			url(${cola_bg}) top 420px center / 
			110% 1027px
			no-repeat`,
			// backgroundSize: "214px 108px, 165px 150px"
		}, {
			background: `url(${ice_cube_2}) bottom 250px right 20% / 
			98px 91px  
			no-repeat,
			url(${ice_cube_1}) bottom 200px left 27% / 
			118px 108px 
			no-repeat`,
			// backgroundSize: "72px 72px, 90px 82px, 98px 91px, 119px, 108px"
		}, {
			background: `url(${ice_cube_3}) top 90px left 30% / 
			72px 72px 
			no-repeat,
			url(${ice_cube_3}) bottom 50px right 40% / 
			90px 82px 
			no-repeat`,
			// backgroundSize: "72px 72px, 90px 82px, 98px 91px, 119px, 108px"
		},]

	}, {
		title: "Лимон",
		image: prod_1_1PNG,
		color: "#FFC700",
		circleFill: "transparent",
		ccal: "21 ккал",
		ml: "200 мл",
		parallaxOptions: [{x:1, y:1},{x:1, y:1},{x:1, y:1},],
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

	}, {
		title: "Лимон",
		image: prod_1_1PNG,
		color: "#FFC700",
		circleFill: "transparent",
		ccal: "21 ккал",
		ml: "200 мл",
		parallaxOptions: [{x:1, y:1},{x:1, y:1},{x:1, y:1},],
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

	}, {
		title: "Лимон",
		image: prod_1_1PNG,
		color: "#FFC700",
		circleFill: "transparent",
		ccal: "21 ккал",
		ml: "200 мл",
		parallaxOptions: [{x:1, y:1},{x:1, y:1},{x:1, y:1},],
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

const parallax = (event, targetArray, parallaxOptions) => {
	// console.log(event.clientX,);
	targetArray[0].current.style.transform = `translate(${(event.clientX / 50) * parallaxOptions[0].x}px, ${(event.clientY / 50) * parallaxOptions[0].y}px)`
	targetArray[1].current.style.transform = `translate(${(event.clientX / 70)* parallaxOptions[1].x}px, ${(event.clientY / 70)* parallaxOptions[1].y}px)`
	targetArray[2].current.style.transform = `translate(${(event.clientX / 90)* parallaxOptions[2].x}px, ${(event.clientY / 90)* parallaxOptions[2].y}px)`
	// console.log(targetArray[0].current.style);
}

const swipeDelay = 10000;

export default function StartPageCatalog() {
	const [currentProduct, setCurrentProduct] = React.useState(0)
	const ref0 = React.useRef(null)
	const ref1 = React.useRef(null)
	const ref2 = React.useRef(null)

	return (
		<div className="start_page_catalog" style={{ background: tempProducts[currentProduct].color }} onMouseMove={(event) => parallax(event, [ref0, ref1, ref2], tempProducts[currentProduct].parallaxOptions)}>

			<div className="start_page_catalog__background">
				<div className="start_page_catalog__layer1 layer" style={tempProducts[currentProduct].styles[0]} ref={ref0}></div>
				<div className="start_page_catalog__layer2 layer" style={tempProducts[currentProduct].styles[1]} ref={ref1}></div>
				<div className="start_page_catalog__layer3 layer" style={tempProducts[currentProduct].styles[2]} ref={ref2}></div>
			</div>
			<div className="start_page_catalog__wrapper">
				<div className="start_page_catalog__circle" /*style={{ background: `url(${tempProducts[currentProduct].image}) center center / 126px 500px  no-repeat` }}*/>
					<img src={tempProducts[currentProduct].image} alt=""/>
					<Circle currentProduct={currentProduct} circleFill = {tempProducts[currentProduct].circleFill}/>
				</div>

			</div>

			{/* <div className="start_page_catalog__text"> */}
			<p className="start_page_catalog__text__ccal">{tempProducts[currentProduct].ccal}</p>
			<p className="start_page_catalog__text__ml">{tempProducts[currentProduct].ml}</p>
			<p className="start_page_catalog__text__title">{tempProducts[currentProduct].title}</p>

			{/* </div> */}
			<button onClick={() => { setCurrentProduct(currentProduct - 1); console.log('-') }}>-</button><button onClick={() => setCurrentProduct(currentProduct + 1)}>+</button>
			
		</div>
	)
}
