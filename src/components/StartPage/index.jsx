import React from 'react';

import StartPageHeader from './StartPageHeader/';
import useWindowSize from './../WindowSize/'
import ColorCorrection from './../ColorCorrection/'

import germanySVG from './../../assets/images/germany.svg';
import kcalSVG from './../../assets/images/kcal.svg';
import appleSVG from './../../assets/images/apple.svg';
import icecreamSVG from './../../assets/images/icecream.svg';
import starSVG from './../../assets/images/star_full.svg';
import arrow_downSVG from './../../assets/images/arrow_down.svg';
import shadowPNG from './../../assets/images/shadow.png';
import prod_1_5PNG from './../../assets/images/1_5.png';
import prod_1_4PNG from './../../assets/images/1_4.png';
import prod_1_3PNG from './../../assets/images/1_3.png';
import prod_1_2PNG from './../../assets/images/1_2.png';
import prod_1_1PNG from './../../assets/images/1_1.png';

import './StartPage.scss'

const Circle = ({ color, sideColor, width, height }) => {
    // const mainCol = color;
    // const sideCol = sideColor || ColorCorrection(color, 10)
    // console.log('cc',  ColorCorrection(color, 10));
    return (
        <svg wiwidth={width} height={height} viewBox="0 0 582 582" xmlns="http://www.w3.org/2000/svg" >
            {/* <g viewBox="0 0 180 180"> */}
            <title>Layer 1</title>
            <circle id="svg_1" fill={color} cx="291" cy="291" r="291" viewBox="0 0 582 582" />
            <g id="svg_19">
                <path id="svg_5" fill={sideColor} d="m111.947861,287.871756l27.346024,-80.807641l12.429742,0l27.342797,80.807641l27.020112,0l-36.138013,-105.054024l-48.882396,0l-36.138013,105.054024l27.019748,0z" clipRule="evenodd" fillRule="evenodd" />
                <path id="svg_6" fill={sideColor} d="m255.254668,136.049878l-5.821059,3.361107l0,-6.725623c-3.150953,-1.007369 -6.537329,-1.007369 -9.687827,0l0,6.725623l-5.823331,-3.361107c-2.451044,2.221892 -4.144459,5.155464 -4.843459,8.388997l5.82424,3.362243l-5.82424,3.360789c0.698545,3.233487 2.392415,6.166968 4.843459,8.388451l5.823331,-3.360243l0,6.724441c3.150953,1.005914 6.536875,1.005914 9.687827,0l0,-6.724441l5.821059,3.360243c2.451953,-2.220983 4.145823,-5.154646 4.843914,-8.388451l-5.822877,-3.360789l5.822877,-3.362243c-0.698091,-3.233851 -2.392415,-6.167605 -4.843914,-8.388997z" clipRule="evenodd" fillRule="evenodd" />
                <path id="svg_7" fill={sideColor} d="m313.649324,137.133464l3.360016,5.822377l-6.722305,0c-1.011686,3.149544 -1.011686,6.536784 0,9.686282l6.722305,0l-3.360016,5.824104c2.221983,2.449635 5.154328,4.143096 8.386633,4.843323l3.364561,-5.821559l3.360471,5.821559c3.233669,-0.698318 6.166923,-2.392052 8.388451,-4.843323l-3.360925,-5.824104l6.725486,0c1.007596,-3.15018 1.007596,-6.536102 0,-9.686282l-6.725486,0l3.360925,-5.822377c-2.221074,-2.451771 -5.154782,-4.14555 -8.388451,-4.843005l-3.360471,5.821786l-3.364561,-5.821786c-3.23276,0.699409 -6.165105,2.39287 -8.386633,4.843005z" clipRule="evenodd" fillRule="evenodd" />
                <path id="svg_8" fill={sideColor} d="m421.591152,207.064569l12.429288,0l19.139322,56.564894l-50.710658,0l19.142049,-56.564894zm58.453284,56.564894l-27.797738,-80.810822l-48.884532,0l-27.795465,80.810822l-16.736453,0l0,39.577565l25.547577,0l0,-15.331636l86.857306,0l0,15.331636l25.543486,0l0,-39.577565l-16.734181,0z" clipRule="evenodd" fillRule="evenodd" />
                <path id="svg_9" fill={sideColor} d="m206.175161,449.987882l24.739046,-71.963795l4.719384,0l24.764497,71.963795l25.173534,0l-32.18262,-93.551888l-40.202029,0l-32.18262,93.551888l25.170808,0z" clipRule="evenodd" fillRule="evenodd" />
                <path id="svg_10" fill={sideColor} d="m372.717528,377.468705l0,-21.59082l-70.149486,0l0,93.554615l70.149486,0l0,-21.599001l-47.445629,0l0,-14.381306l36.650219,0l0,-21.596274l-36.650219,0l0,-14.387214l47.445629,0z" clipRule="evenodd" fillRule="evenodd" />
                <path id="svg_11" fill={sideColor} d="m355.820186,346.742713c2.245162,0.000454 4.44033,-0.664913 6.307359,-1.912023c1.867484,-1.24711 3.322748,-3.020061 4.182182,-5.094335c0.859433,-2.074275 1.084858,-4.357159 0.647188,-6.559144c-0.438125,-2.20244 -1.518893,-4.225358 -3.106413,-5.813333c-1.58752,-1.587975 -3.610438,-2.669197 -5.812424,-3.107776c-2.20244,-0.438125 -4.48487,-0.213608 -6.559599,0.645825c-2.074275,0.858979 -3.84768,2.313789 -5.095244,4.180818c-1.247565,1.867029 -1.913387,4.061743 -1.913387,6.307359c0,3.010516 1.195753,5.897413 3.324112,8.02668c2.128813,2.128813 5.015709,3.325475 8.026226,3.32593z" clipRule="evenodd" fillRule="evenodd" />
                <path id="svg_12" fill={sideColor} d="m319.466747,346.742713c2.245162,0.000454 4.44033,-0.664913 6.307814,-1.912023c1.867029,-1.24711 3.322748,-3.019606 4.182182,-5.093881c0.859888,-2.074275 1.084858,-4.357159 0.647188,-6.559599c-0.43767,-2.201985 -1.518438,-4.225358 -3.105958,-5.813333c-1.58752,-1.587975 -3.610438,-2.669197 -5.812424,-3.107776c-2.20244,-0.438125 -4.48487,-0.213608 -6.559599,0.64537c-2.074729,0.859433 -3.84768,2.314244 -5.095244,4.181273c-1.247565,1.867029 -1.913387,4.061743 -1.913841,6.307359c0,3.010062 1.195753,5.897413 3.324112,8.026226c2.128359,2.129268 5.015255,3.325475 8.025771,3.326384z" clipRule="evenodd" fillRule="evenodd" />
                <path id="svg_13" fill={sideColor} d="m438.433501,374.777238l9.716005,0l14.962139,44.22105l-39.642556,0l14.964412,-44.22105zm45.695403,44.22105l-21.731256,-63.176305l-38.214561,0l-21.729893,63.176305l-13.08602,0l0,30.941873l19.973304,0l0,-11.986618l67.901597,0l0,11.986618l19.97194,0l0,-30.941873l-13.085111,0z" clipRule="evenodd" fillRule="evenodd" />
                <path id="svg_14" fill={sideColor} d="m107.618699,355.839254l-22.832703,0l0,94.23089l22.832703,0l0,-94.23089z" />
                <path id="svg_15" fill={sideColor} d="m137.926336,431.468025l-34.704291,0l0,18.602119l31.996008,0c21.653085,0 32.694826,-12.088878 32.694826,-28.206775c0,-16.118352 -11.186723,-28.204503 -32.649377,-28.204503l-29.414209,0l0,18.598029l32.077043,0c7.084985,0 11.386242,4.044927 11.386242,9.606474c0,5.563365 -4.189908,9.604656 -11.386242,9.604656z" clipRule="evenodd" fillRule="evenodd" />
                <path id="svg_16" fill={sideColor} d="m135.924779,393.772487l-31.585471,0l0,18.602119l28.878551,0c21.653539,0 32.693008,-12.089787 32.693008,-28.207684c0,-16.117898 -11.186268,-28.204048 -32.646651,-28.204048l-28.924909,0l0,18.598029l31.585471,0c7.086348,0 11.387605,4.043109 11.387605,9.60602c0,5.562002 -4.189908,9.605565 -11.387605,9.605565z" clipRule="evenodd" fillRule="evenodd" />
                {/* <path id="svg_17" fill={sideCol} d="m278.713426,194.786626l36.358894,13.634585l-45.448617,38.631324l-31.814032,-11.362154l40.903755,-40.903755z" /> */}
                <path id="svg_18" fill={sideColor} d="m233.450694,213.431012c-5.587453,13.479151 -5.817877,28.583544 -0.644007,42.226765c5.173871,13.643675 15.361633,24.796765 28.481739,31.181387c13.120561,6.385076 28.184051,7.519474 42.112688,3.171859c13.928638,-4.347615 25.672106,-13.849103 32.831172,-26.563808l-21.738074,-11.734833c-2.411958,4.171274 -5.721072,7.753989 -9.688282,10.488632c-3.96721,2.734643 -8.493438,4.552588 -13.249635,5.322488c-4.756652,0.769445 -9.624654,0.471757 -14.252232,-0.871704c-4.627124,-1.343916 -8.89793,-3.699517 -12.502006,-6.897282l76.468662,-40.652879c-2.278794,-7.695814 -6.149198,-14.827157 -11.361245,-20.931361c-5.211593,-6.103749 -11.648481,-11.044014 -18.892536,-14.500381c-7.244055,-3.456367 -15.13348,-5.35112 -23.156979,-5.562002c-8.023499,-0.210882 -16.002004,1.267107 -23.4174,4.337616c-6.952275,2.869171 -13.268724,7.083621 -18.587121,12.40111c-5.318397,5.317488 -9.534211,11.633028 -12.404746,18.584394zm74.40893,-2.556485l-53.826161,28.620812c-0.84489,-6.566871 0.33132,-13.234637 3.371378,-19.116143c3.040058,-5.881506 7.800346,-10.697241 13.645947,-13.805472c5.845601,-3.108231 12.499733,-4.361704 19.075694,-3.593168c6.57596,0.768536 12.761517,3.521813 17.733141,7.89397z" clipRule="evenodd" fillRule="evenodd" />

            </g>
            {/* </g> */}
        </svg>

    )
}

export default function StartPage() {
    const [rating, setRatingValue] = React.useState(null)
    const [hover, setHover] = React.useState(null)
    const [selectedItem, setSelectedItem] = React.useState(0)

    const price = '10₽'
    const tempProps = [{
        image: kcalSVG,
        text: 'Мало калорий'
    }, {
        image: appleSVG,
        text: 'Натуральное'
    }, {
        image: icecreamSVG,
        text: 'Любимое'
    },]


    // const windowSize = useWindowSize();

    // const getOptimalWidth = (width) => {
    //     return width * windowSize.width / 1920;
    // }

    // const itemMainCircleStyle = {
    //     width: getOptimalWidth(582),
    //     height: getOptimalWidth(582)
    // }

    // const itemSideCircleStyle = {
    //     width: getOptimalWidth(147),
    //     height: getOptimalWidth(147)
    // }
    // // console.log(itemMainCircleStyle.width);

    // let asd = {
    //     background
    // }


    const tempItems = [
        {
            pic: prod_1_4PNG,
            mainColor: "#FBB35E",
            sideColor: "#FCCA8E",
            rating: "5.0"
        }, {
            pic: prod_1_2PNG,
            mainColor: "#DBE4A7",
            sideColor: "#e6ecc1",
            rating: "5.0"
        }, {
            pic: prod_1_1PNG,
            mainColor: "#FF4E5A",
            sideColor: "#f46c81",
            rating: "4.8"
        },
        {
            pic: prod_1_5PNG,
            mainColor: "#2D1109",
            sideColor: "#4c342e",
            rating: "4.7"
        }, {
            pic: prod_1_3PNG,
            mainColor: "#3F9B0B",
            sideColor: "#65af3c",
            rating: "5.0"
        },
    ]

    return (
        <React.Fragment>
            <StartPageHeader />
            <div className="startpage">

                <div className="wrapper">

                    <div className="startpage__description">
                        <div className="startpage__description__content">
                            <div className="startpage__description__content__made-in">
                                <div className="startpage__description__content__made-in__box">
                                    <div className="startpage__description__content__made-in__box__text">
                                        <span>
                                            made in
                                        </span>
                                    </div>
                                    <div className="startpage__description__content__made-in__box__image">
                                        <img src={germanySVG} alt="germanySVG" />
                                    </div>
                                </div>
                            </div>
                            <div className="startpage__description__content__title">
                                <h1>
                                    Мороженное
                                    лёд влёд
                                </h1>
                            </div>
                            <div className="startpage__description__content__values">
                                <div className="startpage__description__content__values__stars">
                                    {
                                        [...Array(10)].map((_, index) => (
                                            <label key={index}>
                                                <input
                                                    type="radio"
                                                    name="rating"
                                                    value={index + 1}
                                                    onClick={() => setRatingValue(index + 1)}

                                                />
                                                {index % 2 === 0 ?
                                                    <svg onMouseEnter={() => setHover(index + 1)}
                                                        onMouseLeave={() => setHover(null)} width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="left_star">
                                                        <path d="M9.99308 0.403893C9.21741 0.40694 8.56316 0.886211 8.32636 1.6249L6.79891 6.38961H1.7612C0.984512 6.38961 0.328118 6.86712 0.08901 7.60608C-0.150137 8.34504 0.102094 9.11658 0.731617 9.5716L4.79079 12.5056L3.23655 17.2891C2.99654 18.0278 3.24784 18.7996 3.87677 19.2553C4.50567 19.7111 5.3174 19.7096 5.94465 19.2516L9.99996 16.2901C10 16.2901 10 0.403854 10 0.403854C9.99773 0.403854 9.99535 0.403854 9.99308 0.403893Z"
                                                            fill={index + 1 <= (hover || rating) ? "#FFC800" : "#E4E4E4"} />{/* < "#E4E4E4"*/}
                                                    </svg> :
                                                    <svg onMouseEnter={() => setHover(index + 1)}
                                                        onMouseLeave={() => setHover(null)} width="10" height="20" xmlns="http://www.w3.org/2000/svg" className="right_star">
                                                        <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" />
                                                        <path stroke="null" id="svg_1" fill={index + 1 <= (hover || rating) ? "#FFC800" : "#E4E4E4"} d="m0.029625,0.40389c0.772143,0.00305 1.423418,0.48232 1.659141,1.22101l1.520504,4.76471l5.014801,0c0.773158,0 1.426563,0.47751 1.664586,1.21647c0.238062,0.73896 -0.013021,1.5105 -0.639688,1.96552l-4.040711,2.934l1.547172,4.7835c0.238919,0.7387 -0.011239,1.5105 -0.637309,1.9662c-0.62604,0.4558 -1.434079,0.4543 -2.058476,-0.0037l-4.036869,-2.9615c-0.00004,0 -0.00004,-15.88625 -0.00004,-15.88625c0.00226,0 0.004629,0 0.006889,0.00004z" />
                                                    </svg>
                                                }

                                            </label>
                                        ))
                                    }
                                </div>
                                <div className="startpage__description__content__values__price">
                                    <span>{price}</span>
                                </div>
                            </div>
                            <div className="startpage__description__content__text">
                                <p>
                                    Вкусное мороженное для детей и взрослых
                                    Подходит для добавления в коктейли
                                </p>
                            </div>
                            <div className="startpage__description__content__properties">
                                {
                                    tempProps.map((i, index) => (
                                        <div className="startpage__description__content__properties__item" key={index}>
                                            <div className="startpage__description__content__properties__item__pic">
                                                <img src={i.image} alt={`${index}_pic`} />
                                            </div>
                                            <span>
                                                {i.text}
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="startpage__description__content__button">
                                <div>
                                    <span>
                                        Перейти в каталог
                                    </span>
                                    <div>
                                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.66685 6.9147L1.99166 0.239632C1.83727 0.0851213 1.63118 0 1.41142 0C1.19167 0 0.985572 0.0851213 0.831183 0.239632L0.339602 0.731092C0.0197263 1.05133 0.0197263 1.57182 0.339602 1.89157L5.94492 7.49689L0.333382 13.1084C0.178993 13.2629 0.09375 13.4689 0.09375 13.6885C0.09375 13.9084 0.178993 14.1144 0.333382 14.269L0.824964 14.7604C0.979475 14.9149 1.18545 15 1.4052 15C1.62496 15 1.83105 14.9149 1.98544 14.7604L8.66685 8.0792C8.82161 7.9242 8.90661 7.71725 8.90612 7.49726C8.90661 7.2764 8.82161 7.06958 8.66685 6.9147Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="startpage__items">

                        <div className="startpage__items__main">
                            <div className="startpage__items__main__section">
                                <div className="startpage__items__main__section__item">
                                    <div className="startpage__items__main__section__item__rating">
                                        {tempItems[selectedItem].rating}
                                        <img src={starSVG} alt="starSVG" />
                                    </div>
                                    <div className="startpage__items__main__section__item__content">
                                        <Circle color={tempItems[selectedItem].mainColor} sideColor={tempItems[selectedItem].sideColor} width="582" height="582" />
                                        <img src={shadowPNG} alt="starSVG" className="side_pic shadow" />
                                        <img src={tempItems[selectedItem].pic} alt="prodPNG" className="side_pic" />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="startpage__items__side">
                            <div className="startpage__items__side__section">
                                {
                                    tempItems
                                        .filter((i, index) => index !== selectedItem)
                                        .map((it, index) => (
                                            <div className="startpage__items__side__section__item" key={index}>
                                                <div className="startpage__items__side__section__item__rating">
                                                    {it.rating}
                                                    <img src={starSVG} alt="starSVG" />
                                                </div>
                                                <div className="startpage__items__side__section__item__content">
                                                    <Circle color={it.mainColor} sideColor={it.sideColor} width="147" height="147" />
                                                    <img src={shadowPNG} alt="starSVG" className="side_pic shadow" />
                                                    <img src={it.pic} alt="prodPNG" className="side_pic" />
                                                    <div />
                                                </div>
                                            </div>
                                        ))
                                }

                            </div>
                        </div>

                    </div>

                </div>
                <div className="arrow-wrapper">
                    <img src={arrow_downSVG} alt="arrow_downSVG" className="arrow_down" />
                </div>
            </div>
        </React.Fragment >

    )
}
