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
		circleFill: "#FFC700",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#FFC700",
		pinStroke: "white",
		sideTextColor: "#2F2F2F",
		layerOptionLen: 9,
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [
				{
					pic: ice_cube_1,
					RTLIndex: 2,
					style: {//
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							top: "55%",
							left: "17%"
						},
						transform: {
							transform: "rotate(0deg)"
						}
					}
				}, {
					pic: ice_cube_2,
					RTLIndex: 7,
					style: {
						size: {
							width: "98px ",
							height: "91px ",
						},
						position: {
							bottom: "20%",
							right: "20%"
						},
						transform: {
							transform: "rotate(0deg)"

						}
					}
				}, {
					pic: lemon_1,
					RTLIndex: 6,
					style: {
						size: {
							width: "250px",
							height: "125px ",
						},
						position: {
							bottom: "0",
							right: "23%"
						},
						transform: {
							transform: "rotate(0deg)"

						}
					}
				}, {
					pic: leaf_1,
					RTLIndex: 4,
					style: {
						size: {
							width: "214px ",
							height: "108px",
						},
						position: {
							bottom: "0",
							left: "19%"
						},
						transform: {
							transform: "rotate(0deg)"

						}
					}
				},
			]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_3,
				RTLIndex: 5,
				style: {
					size: {
						width: "90px",
						height: "82px",
					},
					position: {
						bottom: "0",
						right: "45%"
					},
					transform: {

						transform: "rotate(0deg)"
					}
				}
			}, {
				pic: leaf_2,
				RTLIndex: 8,
				style: {
					size: {
						width: "165px",
						height: "150px",
					},
					position: {
						top: "50px",
						right: "20%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			}, {
				pic: lemon_3,
				RTLIndex: 1,
				style: {
					soze: {
						width: "112px",
						height: "161px",
					},
					position: {
						top: "150px",
						left: "20%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_4,
				RTLIndex: 0,
				style: {
					size: {
						width: "72px",
						height: "72px",
					},
					position: {
						top: "80px",
						left: "28%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			}, {
				pic: leaf2_4,
				RTLIndex: 3,
				style: {
					size: {
						width: "44px",
						height: "66px",
					},
					position: {
						top: "70%",
						left: "25%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			},]
		},],
	}, {
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
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_1,
				style: {

				}
			}, {
				pic: ice_cube_2,
				style: {

				}
			}, {
				pic: lemon_1,
				style: {

				}
			}, {
				pic: leaf_1,
				style: {

				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_3,
				style: {

				}
			}, {
				pic: leaf_2,
				style: {

				}
			}, {
				pic: lemon_3,
				style: {

				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_4,
				style: {

				}
			}, {
				pic: leaf2_4,
				style: {

				}
			},]
		},],
	}, {
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
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_1,
				style: {

				}
			}, {
				pic: ice_cube_2,
				style: {

				}
			}, {
				pic: lemon_1,
				style: {

				}
			}, {
				pic: leaf_1,
				style: {

				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_3,
				style: {

				}
			}, {
				pic: leaf_2,
				style: {

				}
			}, {
				pic: lemon_3,
				style: {

				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_4,
				style: {

				}
			}, {
				pic: leaf2_4,
				style: {

				}
			},]
		},],
	}, {
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
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_1,
				style: {

				}
			}, {
				pic: ice_cube_2,
				style: {

				}
			}, {
				pic: lemon_1,
				style: {

				}
			}, {
				pic: leaf_1,
				style: {

				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_3,
				style: {

				}
			}, {
				pic: leaf_2,
				style: {

				}
			}, {
				pic: lemon_3,
				style: {

				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_4,
				style: {

				}
			}, {
				pic: leaf2_4,
				style: {

				}
			},]
		},],
	}, {
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
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_1,
				style: {

				}
			}, {
				pic: ice_cube_2,
				style: {

				}
			}, {
				pic: lemon_1,
				style: {

				}
			}, {
				pic: leaf_1,
				style: {

				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_3,
				style: {

				}
			}, {
				pic: leaf_2,
				style: {

				}
			}, {
				pic: lemon_3,
				style: {

				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_4,
				style: {

				}
			}, {
				pic: leaf2_4,
				style: {

				}
			},]
		},],
	}, {
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
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_1,
				style: {

				}
			}, {
				pic: ice_cube_2,
				style: {

				}
			}, {
				pic: lemon_1,
				style: {

				}
			}, {
				pic: leaf_1,
				style: {

				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_3,
				style: {

				}
			}, {
				pic: leaf_2,
				style: {

				}
			}, {
				pic: lemon_3,
				style: {

				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_4,
				style: {

				}
			}, {
				pic: leaf2_4,
				style: {

				}
			},]
		},],
	},
]

const parallax = (event, targetArray, parallaxOptions) => {
	// console.log(event.clientX,);
	targetArray[0].style.transform = `translate(${(event.clientX / 30) * parallaxOptions[0].parallaxCoefficientX}px, ${(event.clientY / 50) * parallaxOptions[0].parallaxCoefficientY}px)`
	targetArray[1].style.transform = `translate(${(event.clientX / 60) * parallaxOptions[1].parallaxCoefficientX}px, ${(event.clientY / 70) * parallaxOptions[1].parallaxCoefficientY}px)`
	targetArray[2].style.transform = `translate(${(event.clientX / 80) * parallaxOptions[2].parallaxCoefficientX}px, ${(event.clientY / 90) * parallaxOptions[2].parallaxCoefficientY}px)`
	// console.log(targetArray[0].current.style);
}
const getValidIndex = (index, maxIndex) => {
	if (index <= maxIndex && index >= 0) return index;
	if (index > maxIndex) {
		return 0
	}
	if (index < 0) {
		return maxIndex
	}
	console.log("!!!!!!!!!!!!!!!!!!!!!! 549");
}
const getRef = (prewRef, selectedRef, nextRef, currentProduct, index, productsLastIndex) => {
	if (index === currentProduct) return selectedRef
	if (getValidIndex(index + 1, productsLastIndex) === currentProduct + 1) return nextRef
	if (getValidIndex(index - 1, productsLastIndex) === currentProduct - 1) return prewRef
	return React.createRef()
}
const swipeDelay = 10000;

const productsLastIndex = tempProducts.length - 1;
const asd = (zz) => {
	setTimeout(() => { return zz }, 1000)
}
const nextProduct = (currentProduct, setCurrentProduct) => {
	if (currentProduct < productsLastIndex) setCurrentProduct(currentProduct + 1);
	else setCurrentProduct(0);
};
const getWithChangedIndex = (index, newValue, loadIndices) => {
	let temp = loadIndices
	temp[index] = newValue
	return temp;
}

export default function StartPageSlider() {
	const [currentProduct, setCurrentProduct] = React.useState(0);
	const [counter, setCounter] = React.useState(0);
	const prewRef = React.useRef(null);
	const selectedRef = React.useRef(null);
	const nextRef = React.useRef(null);
	const [state, setstate] = React.useState(false);

	React.useEffect(() => {
		let pic = Array(...selectedRef.current.querySelectorAll(".zxccxz"))
		pic.sort((a, b) => a.id - b.id).map((i, index) => {
			setTimeout(() => {
				i.classList.remove("zxccxz")
			}, 500 + index * 100);
		})
		// pic.classList.remove("zxccxz")
		console.log("pic", pic);
	})
	return (
		<div className="start_page_slider" onMouseMove={(event) => parallax(event, selectedRef.current.querySelectorAll('.start_page_slider__item__background__layer'), tempProducts[currentProduct].layerOptions)}>

			<div className="start_page_slider__container">
				{tempProducts.map((product, index) => (
					<div className={`start_page_slider__item ${index === currentProduct ? "active-item" : ""}`} key={index} ref={getRef(prewRef, selectedRef, nextRef, currentProduct, index, productsLastIndex)}
						style={{
							visibility: `${index === currentProduct ? "visible" : "hidden"}`
						}}>
						<div className="start_page_slider__item__background" style={{ background: product.color }}>
							{product.layerOptions.map((layerOption, layerOptionIndex) => (
								<div className="start_page_slider__item__background__layer" key={index + layerOptionIndex * 2}>
									{ layerOption.bgItems.map((bgItem, bgItemIndex) => (
										<img src={bgItem.pic} alt={`bgItem.pic_${bgItemIndex}`}
											style={{ ...bgItem.style.size, ...bgItem.style.position, ...bgItem.style.transform }}
											key={index + layerOptionIndex * 3 + bgItemIndex}
											className={`start_page_slider__item__background__layer__picture zxccxz`}
											id={`${bgItem.RTLIndex}`} />
									))
									}
								</div>
							))
							}
						</div>
						<div className="start_page_slider__item__background-side">
							<div className="start_page_slider__item__background-side__button">
								<div>
									<span>Каталог</span>
									<div>
										<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8.0853 8.66685L14.7604 1.99166C14.9149 1.83727 15 1.63118 15 1.41142C15 1.19167 14.9149 0.985572 14.7604 0.831183L14.2689 0.339602C13.9487 0.0197263 13.4282 0.0197263 13.1084 0.339602L7.50311 5.94492L1.89157 0.333382C1.73706 0.178993 1.53108 0.0937502 1.31145 0.0937502C1.09158 0.0937502 0.885602 0.178993 0.730968 0.333382L0.239632 0.824964C0.0851202 0.979475 1.30184e-08 1.18545 1.56389e-08 1.4052C1.82595e-08 1.62496 0.0851202 1.83105 0.239632 1.98544L6.9208 8.66685C7.0758 8.82161 7.28275 8.90661 7.50274 8.90612C7.7236 8.90661 7.93042 8.82161 8.0853 8.66685Z" fill="#008CE6" />
										</svg>
									</div>
								</div>
							</div>
							<span style={{ color: product.sideTextColor }} className="start_page_slider__item__background-side__phone">8 800 800 - 80 - 80</span>

						</div>

						<div className="start_page_slider__item__wrapper">
							<div className="start_page_slider__item__wrapper__circle">
								<p className="start_page_slider__item__wrapper__circle__ccal">{product.ccal}</p>
								<p className="start_page_slider__item__wrapper__circle__ml">{product.ml}</p>
								<p className="start_page_slider__item__wrapper__circle__title">{product.title}</p>
								<img src={product.image} alt="Image" className="image" />
								<Circle
									currentProduct={currentProduct}
									setCurrentProduct={setCurrentProduct}
									circleFill={product.circleFill}
									pinFill={product.pinFill}
									pinStroke={product.pinStroke} />
							</div>
						</div>
					</div>
				))
				}
				<button onClick={() => setstate(!state)}>{">>>"}</button>
			</div>

		</div >
	)

	function AAAA(bgItem, index, layerOptionIndex, bgItemIndex) {

		return <img src={bgItem.pic} alt="bgItem.pic"
			style={{ ...bgItem.style.position, ...bgItem.style.size }}
			key={index + layerOptionIndex * 3 + bgItemIndex} />;
	}
}
