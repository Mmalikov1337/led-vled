import React from 'react';

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
// import leaf2_3 from './../../../assets/images/leaf2_3.png';
import leaf2_4 from './../../../assets/images/leaf2_4.png';
/* + Кубики льда */
//3
import cola_bg from './../../../assets/images/cola_bg.png';
import cola_cup from './../../../assets/images/cola_cup.png';
//4
import peach1 from './../../../assets/images/peach1.png';
import peach2 from './../../../assets/images/peach2.png';
import peach3 from './../../../assets/images/peach3.png';
// import leaf4_1 from './../../../assets/images/leaf4_1.png';
import leaf4_2 from './../../../assets/images/leaf4_2.png';
import leaf4_3 from './../../../assets/images/leaf4_3.png';
//5
// import tarragon_bg1 from './../../../assets/images/tarragon_bg1.png';
import tarragon_bg2 from './../../../assets/images/tarragon_bg2.png';
import tarragon_secondary from './../../../assets/images/tarragon_secondary.png';

import './StartPageSlider.scss';

const Circle = ({ currentProduct, setCurrentProduct, circleFill, pinFill, pinStroke }) => {
	return (
		<svg width={768} height={768} viewBox="0 0 1300 1300" fill="none" xmlns="http://www.w3.org/2000/svg" className="start_page_catalog_svg">
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
		secondatyImage: [{ pic: lemon_2, styles: { width: "270px", height: "270px", right: "80px", top: "65px" } },],
		backgroundStyle: { background: "#FFC700" },
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
		title: "Вишня",
		image: prod_1_1PNG,
		secondatyImage: [{ pic: cherry2_3, styles: { width: "139px", height: "auto", top: "30px", right: "10%" } },
		{ pic: cherry2_1, styles: { width: "139px", height: "auto", bottom: "220px", left: "14%" } },
		{ pic: leaf2_2, styles: { width: "139px", height: "auto", top: "150px", left: "15%" } }],
		backgroundStyle: { background: "#FF4E5A" },
		circleFill: "#FF4E5A",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#FF4E5A",
		pinStroke: "white",
		sideTextColor: "#fff",
		layerOptionLen: 9,
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [
				{
					pic: ice_cube_1,
					RTLIndex: 0,
					style: {//
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							top: "21%",
							left: "19%"
						},
						transform: {
							transform: "rotate(0deg)"
						}
					}
				}, {
					pic: leaf2_4,
					RTLIndex: 7,
					style: {
						size: {
							width: "66px ",
							height: "auto ",
						},
						position: {
							bottom: "15%",
							right: "20%"
						},
						transform: {
							transform: "rotate(0deg)"

						}
					}
				}, {
					pic: cherry2_1,
					RTLIndex: 6,
					style: {
						size: {
							width: "121px",
							height: "auto ",
						},
						position: {
							bottom: "-25px",
							right: "23%"
						},
						transform: {
							transform: "rotate(0deg)"

						}
					}
				}, {
					pic: leaf2_1,
					RTLIndex: 4,
					style: {
						size: {
							width: "173px ",
							height: "auto",
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
			bgItems: [
				{
					pic: ice_cube_2,
					RTLIndex: 8,
					style: {
						size: {
							width: "94px",
							height: "auto",
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
					pic: cherry2_2,
					RTLIndex: 3,
					style: {
						soze: {
							width: "112px",
							height: "161px",
						},
						position: {
							bottom: "150px",
							left: "17%"
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
				RTLIndex: 4,
				style: {
					size: {
						width: "72px",
						height: "72px",
					},
					position: {
						bottom: "60px",
						left: "32%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			}, {
				pic: leaf2_4,
				RTLIndex: 2,
				style: {
					size: {
						width: "89px",
						height: "auto",
					},
					position: {
						top: "50%",
						left: "25%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			}, {
				pic: leaf2_4,
				RTLIndex: 8,
				style: {
					size: {
						width: "35px",
						height: "auto",
					},
					position: {
						top: "50px",
						right: "34%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			},
			]
		},],
	}, {
		title: "Кола",
		image: prod_1_5PNG,
		secondatyImage: [],
		backgroundStyle: { background: `url(${cola_bg}) bottom center / 110% auto no-repeat, #230D07` },
		circleFill: "#230D07",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#230D07",
		pinStroke: "white",
		sideTextColor: "#fff",
		layerOptionLen: 9,
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {},
			bgItems: [
				{
					pic: ice_cube_1,
					RTLIndex: 1,
					style: {//
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							bottom: "17%",
							left: "28%"
						},
						transform: {
							transform: "rotate(-30deg)"
						}
					}
				}, {
					pic: ice_cube_4,
					RTLIndex: 2,
					style: {
						size: {
							width: "68px",
							height: "auto",
						},
						position: {
							bottom: "20px",
							right: "36%"
						},
						transform: {
							transform: "rotate(0deg)",
							opacity: "0.7"
						}
					}
				},
			]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 0, layerStyle: {
				background: `url(${cola_cup}) right 8% center no-repeat`,
				// width: " 110 %"
				height: "100%",

			},
			bgItems: [

			]
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
						transform: "rotate(0deg)",
						opacity: "0.5"
					}
				}
			}, {
				pic: ice_cube_4,
				RTLIndex: 3,
				style: {
					size: {
						width: "130px",
						height: "auto",
					},
					position: {
						bottom: "-20px",
						right: "29%"
					},
					transform: {
						transform: "rotate(30deg)",
						opacity: "0.9"
					}
				}
			},]
		},],
	}, {
		title: "Персик",
		image: prod_1_4PNG,
		secondatyImage: [{ pic: peach1, styles: { width: "250px", height: "250px", right: "175px", top: "54px" } }],
		backgroundStyle: { background: "#FBB35E" },
		circleFill: "#FBB35E",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#FBB35E",
		pinStroke: "white",
		sideTextColor: "#fff",
		layerOptionLen: 9,
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [
				{
					pic: ice_cube_1,
					RTLIndex: 1,
					style: {//
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							top: "8%",
							left: "20%"
						},
						transform: {
							transform: "rotate(40deg)"
						}
					}
				}, {
					pic: ice_cube_1,
					RTLIndex: 5,
					style: {//
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							bottom: "8%",
							right: "35%"
						},
						transform: {
							transform: "rotate(40deg)"
						}
					}
				}, {
					pic: peach3,
					RTLIndex: 6,
					style: {//
						size: {
							width: "264px",
							height: "auto",
						},
						position: {
							bottom: "0",
							right: "22%"
						},
						transform: {
							transform: "rotate(0deg)"
						}
					}
				}, {
					pic: leaf4_3,
					RTLIndex: 4,
					style: {//
						size: {
							width: "264px",
							height: "auto",
						},
						position: {
							bottom: "0",
							left: "25%"
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
				pic: ice_cube_4,
				RTLIndex: 3,
				style: {
					size: {
						width: "90px",
						height: "82px",
					},
					position: {
						bottom: "0",
						left: "16%"
					},
					transform: {

						transform: "rotate(45deg)"
					}
				}
			}, {
				pic: leaf4_2,
				RTLIndex: 0,
				style: {
					size: {
						width: "217px",
						height: "auto",
					},
					position: {
						top: "-10px",
						left: "26%"
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
				RTLIndex: 8,
				style: {
					size: {
						width: "72px",
						height: "72px",
					},
					position: {
						top: "80px",
						right: "16%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			}, {
				pic: peach2,
				RTLIndex: 2,
				style: {
					size: {
						width: "158px",
						height: "auto",
					},
					position: {
						top: "27%",
						left: "12%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			}, {
				pic: leaf4_2,
				RTLIndex: 5,
				style: {
					size: {
						width: "131px",
						height: "auto",
					},
					position: {
						top: "31%",
						right: "24%"
					},
					transform: {

						transform: "rotate(180deg)"
					}
				}
			},]
		},],
	}, {
		title: "Тархун",
		image: prod_1_3PNG,
		secondatyImage: [{ pic: tarragon_secondary, styles: { width: "357px", height: "auto" } }],
		backgroundStyle: { background: "#3F9B0B" },
		circleFill: "#3F9B0B",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#3F9B0B",
		pinStroke: "white",
		sideTextColor: "#fff",
		layerOptionLen: 9,
		noAnimatedBG: [{
			pic: tarragon_bg2,
			RTLIndex: 5,
			style: {
				size: {
					width: "auto",
					height: "auto",
				},
				position: {
					bottom: "-11%",
					right: "31%"
				},
				transform: {

					transform: "rotate(-4deg)"
				}
			}
		}, {
			pic: tarragon_bg2,
			RTLIndex: 8,
			style: {
				size: {
					width: "auto",
					height: "auto",
				},
				position: {
					top: "-12%",
					right: "11%"
				},
				transform: {
					transform: "rotate(80deg)"

				}
			}
		},],
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {},
			bgItems: [
				{
					pic: ice_cube_1,
					RTLIndex: 1,
					style: {//
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							top: "51%",
							left: "17%"
						},
						transform: {
							transform: "rotate(-45deg)"
						}
					}
				}, {
					pic: ice_cube_1,
					RTLIndex: 4,
					style: {//
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							bottom: "5%",
							right: "34%"
						},
						transform: {
							transform: "rotate(35deg)"
						}
					}
				},
			]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_2,
				RTLIndex: 2,
				style: {
					size: {
						width: "98px ",
						height: "91px ",
					},
					position: {
						bottom: "22%",
						left: "28%"
					},
					transform: {
						transform: "rotate(-45deg)"

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
				pic: ice_cube_4,
				RTLIndex: 3,
				style: {
					size: {
						width: "90px",
						height: "auto",
					},
					position: {
						top: "90px",
						right: "30%"
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
		secondatyImage: [{ pic: lemon_2, styles: { width: "250px", height: "250px" } }],
		backgroundStyle: { background: "#FBB35E" },
		circleFill: "#FBB35E",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#FBB35E",
		pinStroke: "white",
		sideTextColor: "#fff",
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
	},
]

const parallax = (event, targetArray, parallaxOptions) => {
	targetArray[0].style.transform = `translate(${(event.clientX / 30) * parallaxOptions[0].parallaxCoefficientX}px, ${(event.clientY / 50) * parallaxOptions[0].parallaxCoefficientY}px)`;
	targetArray[1].style.transform = `translate(${(event.clientX / 55) * parallaxOptions[1].parallaxCoefficientX}px, ${(event.clientY / 70) * parallaxOptions[1].parallaxCoefficientY}px)`;
	targetArray[2].style.transform = `translate(${(event.clientX / 80) * parallaxOptions[2].parallaxCoefficientX}px, ${(event.clientY / 90) * parallaxOptions[2].parallaxCoefficientY}px)`;
}
const getValidIndex = (index, maxIndex) => {
	if (index <= maxIndex && index >= 0) return index;
	if (index > maxIndex) return 0;
	if (index < 0) return maxIndex;

}
const getRef = (prewRef, selectedRef, nextRef, currentProduct, index, productsLastIndex) => {
	if (index === currentProduct) return selectedRef;
	if (getValidIndex(currentProduct + 1, productsLastIndex) === index) return nextRef;
	if (getValidIndex(currentProduct - 1, productsLastIndex) === index) return prewRef;
	return React.createRef();
}

const swipeDelay = 10000;

const productsLastIndex = tempProducts.length - 1;

const nextProduct = (setCirclePin, currentProduct, setCurrentProduct, selectedRef, prewRef) => {
	let p = new Promise(res => {
		selectedRef.current.classList.add("change-product");
		if (currentProduct < productsLastIndex) setCirclePin(currentProduct + 1);
		else setCirclePin(0);
		prewRef.current.classList.remove("change-product");
		setTimeout(() => {
			if (currentProduct < productsLastIndex) setCurrentProduct(currentProduct + 1);
			else setCurrentProduct(0);
			res()
		}, 1000);
	})
	p.then(() => {
		let pics = [...prewRef.current.querySelectorAll(".start_page_slider__item__background__layer__picture")];
		pics.map((i) => i.classList.add("init_pos"));
	})

};
const setProduct = (nextIndex, containerRef, setCurrentProduct, setCirclePin) => {
	setCirclePin(nextIndex);
	setCurrentProduct(nextIndex);
	let allBackgroundImages = [...containerRef.current.querySelectorAll(".start_page_slider__item__background__layer__picture")];
	allBackgroundImages.map(i => i.classList.add("init_pos"));
};

export default function StartPageSlider() {
	const [currentProduct, setCurrentProduct] = React.useState(0);
	const [currentCirclePin, setCirclePin] = React.useState(0);
	const prewRef = React.useRef(null);
	const selectedRef = React.useRef(null);
	const nextRef = React.useRef(null);
	const containerRef = React.useRef(null);

	React.useEffect(() => {
		const timer = setInterval(() => nextProduct(setCirclePin, currentProduct, setCurrentProduct, selectedRef, prewRef), swipeDelay);
		let pictures = Array(...selectedRef.current.querySelectorAll(".init_pos"))
		pictures.sort((a, b) => a.id - b.id).map((pic, index) => {
			setTimeout(() => {
				pic.classList.remove("init_pos");
			}, 500 + index * 100);
		})
		return () => clearInterval(timer);
	})
	return (
		<div className="start_page_slider"
			onMouseMove={(event) => parallax(event,
				selectedRef.current.querySelectorAll('.start_page_slider__item__background__layer'),
				tempProducts[currentProduct].layerOptions)}>

			<div className="start_page_slider__container" ref={containerRef}>
				{tempProducts.map((product, index) => (
					<div className={`start_page_slider__item ${index === currentProduct ? "active-item" : ""}`}
						key={index}
						ref={getRef(prewRef, selectedRef, nextRef, currentProduct, index, productsLastIndex)}
						style={{ zIndex: `${index === currentProduct ? "4" : index === getValidIndex(currentProduct + 1, productsLastIndex) ? "3" : "2"}` }}
					>
						<div className="start_page_slider__item__background" style={product.backgroundStyle}>
							{product.layerOptions.map((layerOption, layerOptionIndex) => (
								<div className="start_page_slider__item__background__layer" key={`${index}_${layerOptionIndex}`} style={layerOption.layerStyle}>
									{ layerOption.bgItems.map((bgItem, bgItemIndex) => (
										<img src={bgItem.pic} alt={`bgItem.pic_${bgItemIndex}`}
											style={{ ...bgItem.style.size, ...bgItem.style.position, ...bgItem.style.transform }}
											key={`${index}_${layerOptionIndex}_${bgItemIndex}`}
											className="start_page_slider__item__background__layer__picture init_pos"
											id={`${bgItem.RTLIndex}`} />
									))
									}
								</div>
							))
							}
							{product.noAnimatedBG && <div className="start_page_slider__item__background__no-animated">
								{product.noAnimatedBG.map((it, index) => (
									<img src={it.pic} alt="it.pic" style={{ ...it.style.size, ...it.style.position, ...it.style.transform }} key={`${index}i`} />
								))}
							</div>
							}

						</div>
						<div className="start_page_slider__item__background-side">
							<span className="start_page_slider__item__background-side__hash" style={{ color: product.sideTextColor }}><span>#</span>лёдвлёд</span>
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
								<div className="start_page_slider__item__wrapper__circle__secondary">
									{product.secondatyImage.map((i, index) =>
										<img src={i.pic} alt="i.pic" key={index} style={i.styles} />
									)}
								</div>
								<img src={product.image} alt="product.image" className="image" />
								<Circle
									currentProduct={currentCirclePin}
									setCurrentProduct={(index) => setProduct(index, containerRef, setCurrentProduct, setCirclePin)}
									circleFill={product.circleFill}
									pinFill={product.pinFill}
									pinStroke={product.pinStroke} />
							</div>
						</div>
					</div>
				))
				}
			</div>
		</div >
	)
}
