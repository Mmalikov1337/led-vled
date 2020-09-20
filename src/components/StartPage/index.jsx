import React from 'react';

import StartPageHeader from './StartPageHeader/';
import germanySVG from './../../assets/images/germany.svg';
import kcalSVG from './../../assets/images/kcal.svg';
import appleSVG from './../../assets/images/apple.svg';
import icecreamSVG from './../../assets/images/icecream.svg';

import './StartPage.scss'

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

export default function StartPage() {
    const [rating, setRatingValue] = React.useState(null)
    const [hover, setHover] = React.useState(null)
    const price = '10₽'
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
                                            <label>
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
                        <p>
                            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam culpa, repellendus, doloremque animi enim ut cum, ipsam impedit eligendi asperiores quod doloribus placeat nostrum sapiente dolorum laborum cupiditate vero saepe! */}
                        </p>
                    </div>

                </div>

            </div>

        </React.Fragment >

    )
}
