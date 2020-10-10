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
//4
import peach1 from './../../../assets/images/peach1.png';
import peach2 from './../../../assets/images/peach2.png';
import peach3 from './../../../assets/images/peach3.png';
import leaf4_1 from './../../../assets/images/leaf4_1.png';
import leaf4_2 from './../../../assets/images/leaf4_2.png';
import leaf4_3 from './../../../assets/images/leaf4_3.png';
//5
import tarragon_bg1 from './../../../assets/images/tarragon_bg1.png';
import tarragon_bg2 from './../../../assets/images/tarragon_bg2.png';
import tarragon_secondary from './../../../assets/images/tarragon_secondary.png';

import './StartPageSlider.scss'

const Circle = ({ currentProduct, setCurrentProduct, circleFill, pinFill, pinStroke }) => {
	return (
		<svg width={768} height={768} viewBox="0 0 1300 1300" fill="none" xmlns="http://www.w3.org/2000/svg" className="start_page_catalog_svg">
			{/* <svg > */}
			<circle cx={1300 / 2} cy={1300 / 2} r={620} fill={circleFill} viewBox="0 0 1300 1300" />
			<path className="circle__nav_arc zxc" d="M 635.0014632766333,1269.8185572376467 A 620,620 0 0, 1 120.72065205686215,972.8983924408526" strokeWidth={2} />
			<path data-slide={0} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 0 ? "active-line" : ""}`} d="M 635.0014632766333,1269.8185572376467 A 620,620 0 0, 1 120.72065205686215,972.8983924408526" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />
			<path className="circle__nav_arc" d="M 105.72211533349571,946.9201647967941 A 620,620 60 0, 1 105.7221153334956,353.079835203206" strokeWidth={2} />
			<path data-slide={1} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 1 ? "active-line" : ""}`} d="M 105.72211533349571,946.9201647967941 A 620,620 60 0, 1 105.7221153334956,353.079835203206" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />
			<path className="circle__nav_arc" d="M 120.72065205686226,327.1016075591472 A 620,620 120 0, 1 635.0014632766338,30.1814427623533" strokeWidth={2} />
			<path data-slide={2} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 2 ? "active-line" : ""}`} d="M 120.72065205686226,327.1016075591472 A 620,620 120 0, 1 635.0014632766338,30.1814427623533" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />
			<path className="circle__nav_arc" d="M 664.9985367233666,30.1814427623533 A 620,620 180 0, 1 1179.2793479431375,327.101607559147" strokeWidth={2} />
			<path data-slide={3} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 3 ? "active-line" : ""}`} d="M 664.9985367233666,30.1814427623533 A 620,620 180 0, 1 1179.2793479431375,327.101607559147" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />
			<path className="circle__nav_arc" d="M 1194.2778846665042,353.0798352032058 A 620,620 240 0, 1 1194.2778846665046,946.9201647967939" strokeWidth={2} />
			<path data-slide={4} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 4 ? "active-line" : ""}`} d="M 1194.2778846665042,353.0798352032058 A 620,620 240 0, 1 1194.2778846665046,946.9201647967939" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />
			<path className="circle__nav_arc" d="M 1179.2793479431384,972.8983924408517 A 620,620 300 0, 1 664.9985367233663,1269.8185572376467" strokeWidth={2} />
			<path data-slide={5} className={`circle__nav_arc circle__nav_arc--front ${currentProduct === 5 ? "active-line" : ""}`} d="M 1179.2793479431384,972.8983924408517 A 620,620 300 0, 1 664.9985367233663,1269.8185572376467" strokeWidth={3} strokeDasharray="619.2624817418906" strokeDashoffset="619.2624817418906" style={{ opacity: 1 }} />

			<circle className="homeSlider__navigationPin" onClick={() => setCurrentProduct(0)} data-slide={0} r={24} fill={currentProduct === 0 ? "white" : pinFill} cx={650} cy={1270} strokeWidth={currentProduct === 0 ? 2 : 26} data-cy="sliderPin" style={{ transformOrigin: '0px 0px 0px' }} data-svg-origin="650 1270" transform="matrix(1,0,0,1,0,0)" tabIndex={0} focusable="true" />
			<circle className="homeSlider__navigationPinAfter" r={currentProduct === 0 ? 16 : 26} stroke={currentProduct === 0 ? "#008CE6" : pinStroke} cx={650} cy={1270} strokeWidth={currentProduct === 0 ? 20 : 4} data-cy="sliderPinAfter" />

			<circle className="homeSlider__navigationPin" onClick={() => setCurrentProduct(1)} data-slide={1} r={24} fill={currentProduct === 1 ? "white" : pinFill} cx="113.06424965364795" cy={960} strokeWidth={currentProduct === 1 ? 2 : 26} data-cy="sliderPin" tabIndex={0} focusable="true" style={{ transformOrigin: '0px 0px 0px' }} data-svg-origin="113.06424713134766 960" transform="matrix(1,0,0,1,0,0)" />
			<circle className="homeSlider__navigationPinAfter" r={currentProduct === 1 ? 16 : 26} stroke={currentProduct === 1 ? "#008CE6" : pinStroke} cx="113.06424965364795" cy={960} strokeWidth={currentProduct === 1 ? 20 : 4} data-cy="sliderPinAfter" />

			<circle className="homeSlider__navigationPin" onClick={() => setCurrentProduct(2)} data-slide={2} r={24} fill={currentProduct === 2 ? "white" : pinFill} cx="113.06424965364806" cy="339.99999999999994" strokeWidth={currentProduct === 2 ? 2 : 26} data-cy="sliderPin" tabIndex={0} focusable="true" style={{ transformOrigin: '0px 0px 0px' }} data-svg-origin="113.06424713134766 340" transform="matrix(1,0,0,1,0,0)" />
			<circle className="homeSlider__navigationPinAfter" r={currentProduct === 2 ? 16 : 26} stroke={currentProduct === 2 ? "#008CE6" : pinStroke} cx="113.06424965364806" cy="339.99999999999994" strokeWidth={currentProduct === 2 ? 20 : 4} data-cy="sliderPinAfter" />

			<circle className="homeSlider__navigationPin homeSlider__navigationPin--active" onClick={() => setCurrentProduct(3)} fill={currentProduct === 3 ? "white" : pinFill} data-slide={3} r={24} cx="649.9999999999999" cy={30} strokeWidth={currentProduct === 3 ? 2 : 26} data-cy="sliderPin" tabIndex={-1} focusable="true" style={{ transformOrigin: '0px 0px 0px' }} data-svg-origin="650 30" transform="matrix(1,0,0,1,0,0)" />
			<circle className="homeSlider__navigationPinAfter" r={currentProduct === 3 ? 16 : 26} stroke={currentProduct === 3 ? "#008CE6" : pinStroke} cx="649.9999999999999" cy={30} strokeWidth={currentProduct === 3 ? 20 : 4} data-cy="sliderPinAfter" />

			<circle className="homeSlider__navigationPin _2" onClick={() => setCurrentProduct(4)} data-slide={4} r={24} fill={currentProduct === 4 ? "white" : pinFill} cx="1186.9357503463518" cy="339.9999999999997" strokeWidth={currentProduct === 4 ? 2 : 26} data-cy="sliderPin" tabIndex={0} focusable="true" style={{ transformOrigin: '0px 0px 0px' }} data-svg-origin="1186.935791015625 340" transform="matrix(1,0,0,1,0,0)" />
			<circle className="homeSlider__navigationPinAfter" r={currentProduct === 4 ? 16 : 26} stroke={currentProduct === 4 ? "#008CE6" : pinStroke} cx="1186.9357503463518" cy="339.9999999999997" strokeWidth={currentProduct === 4 ? 20 : 4} data-cy="sliderPinAfter" />

			<circle className="homeSlider__navigationPin" onClick={() => setCurrentProduct(5)} data-slide={5} r={24} fill={currentProduct === 5 ? "white" : pinFill} cx="1186.935750346352" cy="959.9999999999995" strokeWidth={currentProduct === 5 ? 2 : 26} data-cy="sliderPin" tabIndex={0} focusable="true" style={{ transformOrigin: '0px 0px 0px' }} data-svg-origin="1186.935791015625 960" transform="matrix(1,0,0,1,0,0)" />
			<circle className="homeSlider__navigationPinAfter" r={currentProduct === 5 ? 16 : 26} cx="1186.935750346352" stroke={currentProduct === 5 ? "#008CE6" : pinStroke} cy="959.9999999999995" strokeWidth={currentProduct === 5 ? 20 : 4} data-cy="sliderPinAfter" />
		</svg>
	)
}

let tempProducts = [
	{
		title: "Лимон",
		image: prod_1_2PNG,
		secondatyImage: { pic: lemon_2, styles: { width: "250px", height: "250px" } },
		color: "#FFC700",
		circleFill: "transparent",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#FFC700",
		pinStroke: "white",
		sideTextColor: "#2F2F2F",
		parallaxOptions: [{ x: 1, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 1 },],
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
			url(${lemon_3}) bottom 250px right 20%  / 
			112px 161px 
			no-repeat`,
			// backgroundSize: "250px 125px,250px 250px, 112px 161px"url(${lemon_2}) top 60% left 38% /
			// 250px 250px 
			// no-repeat,
		},]

	}, {
		title: "Вишня",
		image: prod_1_1PNG,
		secondatyImage: { pic: cherry2_3, styles: { width: "139px", height: "179px" } },
		color: "#FF4E5A",
		circleFill: "transparent",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#FF4E5A",
		pinStroke: "white",
		sideTextColor: "white",
		parallaxOptions: [{ x: 1, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 1 },],
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
			no-repeat`,

			// backgroundSize: "116px 173px, 88px 130px, 69px 104px, 22px, 35px"
			// ,
			// url(${})  top 60% left 38% /
			// 139px 179px 
			// no-repeat
		},
		]

	}, {
		title: "Кола",
		image: prod_1_5PNG,
		secondatyImage: false,
		color: "#230D07",
		circleFill: "#230D07",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#230D07",
		pinStroke: "white",
		sideTextColor: "white",
		parallaxOptions: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 1 },],
		styles: [{
			background: `url(${cola_cup}) center right 65px /
			auto 100%
			no-repeat,
			url(${cola_bg}) top 420px center / 
			110% 1027px
			no-repeat`,
			// backgroundSize: "214px 108px, 165px 150px"
		}, {
			background: `url(${ice_cube_2}) bottom  right 25% / 
			138px 128px  
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
		title: "Персик",
		image: prod_1_4PNG,
		secondatyImage: { pic: peach1, styles: { width: "270px", height: "270px" } },
		color: "#FBB35E",
		circleFill: "#FBB35E",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#FBB35E",
		pinStroke: "white",
		sideTextColor: "white",
		parallaxOptions: [{ x: 1, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 1 },],
		styles: [{
			background: `url(${leaf4_2}) top 20px right 70%/
			217px auto
			no-repeat,
			url(${leaf4_1}) top 38% right 26%/
			131px auto
			no-repeat,
			url(${leaf4_3}) bottom  left 20%/
			187px auto
			no-repeat`,
			// backgroundSize: "72px 72px, 90px 82px, 98px 91px, 119px, 108px"
		},
		{
			background: `url(${ice_cube_2}) top 130px right 77%/
			98px auto
			no-repeat,
			url(${ice_cube_3}) bottom left 12% /
			131px auto
			no-repeat,
			url(${ice_cube_1}) bottom 70px right 38%/
			187px auto
			no-repeat,
			url(${ice_cube_4}) top 70px right 15%/
			72px auto
			no-repeat`,
		}, {
			background: `url(${peach3}) bottom 10px right 24%/
			264px auto
			no-repeat,
			url(${peach2}) top 40% left 15%/
			158px auto
			no-repeat`,
		},
		]

	}, {
		title: "Тархун",
		image: prod_1_3PNG,
		secondatyImage: { pic: tarragon_secondary, styles: { width: "357px", height: "250px" } },
		color: "#3F9B0B",
		circleFill: "#3F9B0B",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#3F9B0B",
		pinStroke: "white",
		sideTextColor: "white",
		parallaxOptions: [{ x: 1, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 1 },],
		styles: [
			{
				background: `url(${leaf4_2}) top 20px right 70%/
				217px auto
				no-repeat,
				url(${leaf4_1}) top 38% right 26%/
				131px auto
				no-repeat,
				url(${leaf4_3}) bottom  left 20%/
				187px auto
				no-repeat`,
				// backgroundSize: "72px 72px, 90px 82px, 98px 91px, 119px, 108px"
			},
			{
				background: `url(${ice_cube_2}) top 130px right 77%/
				98px auto
				no-repeat,
				url(${ice_cube_3}) bottom left 12% /
				131px auto
				no-repeat,
				url(${ice_cube_1}) bottom 70px right 38%/
				187px auto
				no-repeat,
				url(${ice_cube_4}) top 70px right 15%/
				72px auto
				no-repeat`,
			}, {
				background: `url(${peach3}) bottom 10px right 24%/
				264px auto
				no-repeat,
				url(${peach2}) top 40% left 15%/
				158px auto
				no-repeat`,
			},
		]

	}, {
		title: "Тархун",
		image: prod_1_3PNG,
		secondatyImage: { pic: tarragon_secondary, styles: { width: "357px", height: "250px", top: "50%", right: "50%" } },
		color: "#3F9B0B",
		circleFill: "#3F9B0B",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#3F9B0B",
		pinStroke: "white",
		sideTextColor: "white",
		parallaxOptions: [{ x: 1, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 1 },],
		styles: [
			{
				background: `url(${tarragon_bg1}) top 100% right 20%/
				900px auto
				no-repeat,
				url(${tarragon_bg2}) top 100% left 20%/
				900px auto
				no-repeat,
				url(${leaf4_3}) bottom  left 20%/
				187px auto
				no-repeat`,
				// backgroundSize: "72px 72px, 90px 82px, 98px 91px, 119px, 108px"
			},
			{
				background: `url(${ice_cube_2}) top 130px right 77%/
				98px auto
				no-repeat,
				url(${ice_cube_3}) bottom left 12% /
				131px auto
				no-repeat,
				url(${ice_cube_1}) bottom 70px right 38%/
				187px auto
				no-repeat,
				url(${ice_cube_4}) top 70px right 15%/
				72px auto
				no-repeat`,
			}
		]

	},
]

const parallax = (event, targetArray, parallaxOptions) => {
	// console.log(event.clientX,);
	targetArray[0].current.style.transform = `translate(${(event.clientX / 50) * parallaxOptions[0].x}px, ${(event.clientY / 50) * parallaxOptions[0].y}px)`
	targetArray[1].current.style.transform = `translate(${(event.clientX / 70) * parallaxOptions[1].x}px, ${(event.clientY / 70) * parallaxOptions[1].y}px)`
	targetArray[2].current.style.transform = `translate(${(event.clientX / 90) * parallaxOptions[2].x}px, ${(event.clientY / 90) * parallaxOptions[2].y}px)`
	// console.log(targetArray[0].current.style);
}

const swipeDelay = 10000;

const productsQuantity = tempProducts.length;

const nextProduct = (currentProduct, setCurrentProduct) => {
	if (currentProduct < productsQuantity - 1) setCurrentProduct(currentProduct + 1);
	else setCurrentProduct(0);
};

// const prewProduct = (currentProduct, setCurrentProduct) => {
// 	if (currentProduct > 0) setCurrentProduct(currentProduct - 1);
// 	else setCurrentProduct(productsQuantity - 1);
// };

export default function StartPageSlider() {
	const [currentProduct, setCurrentProduct] = React.useState(5)
	const ref0 = React.useRef(null)
	const ref1 = React.useRef(null)
	const ref2 = React.useRef(null)

	React.useEffect(() => {
		const timer = setInterval(() => nextProduct(currentProduct, setCurrentProduct), swipeDelay);
		return () => clearInterval(timer);
	});

	return (
		<div className="start_page_slider" style={{ background: tempProducts[currentProduct].color }} onMouseMove={(event) => parallax(event, [ref0, ref1, ref2], tempProducts[currentProduct].parallaxOptions)}>
			<div className="start_page_slider__background">
				<span style={{ color: tempProducts[currentProduct].sideTextColor }} className="start_page_slider__background__hash"><span className="start_page_slider__hash__colored">#</span>лёдвлёд</span>
				<div className="start_page_slider__background__button">
					<div>
						<span>Каталог</span>
						<div>
							<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.0853 8.66685L14.7604 1.99166C14.9149 1.83727 15 1.63118 15 1.41142C15 1.19167 14.9149 0.985572 14.7604 0.831183L14.2689 0.339602C13.9487 0.0197263 13.4282 0.0197263 13.1084 0.339602L7.50311 5.94492L1.89157 0.333382C1.73706 0.178993 1.53108 0.0937502 1.31145 0.0937502C1.09158 0.0937502 0.885602 0.178993 0.730968 0.333382L0.239632 0.824964C0.0851202 0.979475 1.30184e-08 1.18545 1.56389e-08 1.4052C1.82595e-08 1.62496 0.0851202 1.83105 0.239632 1.98544L6.9208 8.66685C7.0758 8.82161 7.28275 8.90661 7.50274 8.90612C7.7236 8.90661 7.93042 8.82161 8.0853 8.66685Z" fill="#008CE6" />
							</svg>
						</div>
					</div>
				</div>
				<span style={{ color: tempProducts[currentProduct].sideTextColor }} className="start_page_catalog__background__phone">8 800 800 - 80 - 80</span>
				<div className="start_page_slider__layer1 layer" style={tempProducts[currentProduct].styles[0]} ref={ref0}></div>
				<div className="start_page_slider__layer2 layer" style={tempProducts[currentProduct].styles[1]} ref={ref1}></div>
				<div className="start_page_slider__layer3 layer" style={tempProducts[currentProduct].styles[2]} ref={ref2}></div>
			</div>
			<div className="start_page_slider__wrapper">
				<div className="start_page_slider__circle" /*style={{ background: `url(${tempProducts[currentProduct].image}) center center / 126px 500px  no-repeat` }}*/>
					{tempProducts[currentProduct].secondatyImage && <img src={tempProducts[currentProduct].secondatyImage.pic} alt="secondatyImage" className="secondary_image" style={tempProducts[currentProduct].secondatyImage.styles} />}
					<img src={tempProducts[currentProduct].image} alt="Image" className="image" />
					<Circle currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} circleFill={tempProducts[currentProduct].circleFill} pinFill={tempProducts[currentProduct].pinFill} pinStroke={tempProducts[currentProduct].pinStroke} />
				</div>
			</div>
			<p className="start_page_slider__text__ccal">{tempProducts[currentProduct].ccal}</p>
			<p className="start_page_slider__text__ml">{tempProducts[currentProduct].ml}</p>
			<p className="start_page_slider__text__title">{tempProducts[currentProduct].title}</p>
			{/* <div className="start_page_catalog__phone"> */}

			{/* </div> */}
		</div>
	)
}
