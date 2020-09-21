import React from 'react';

import Composition from './Composition/';

import logo_whiteSVG from './../../assets/images/logo_white.svg';

import './Swiper.scss';

export default function Swiper() {
    const links = [{
        title: 'Состав',
        link: '',
    }, {
        title: 'Как использовать',
        link: '',
    }, {
        title: 'Цена',
        link: '',
    }, {
        title: 'Доставка',
        link: '',
    }, {
        title: 'Любимые вкусы',
        link: '',
    }, {
        title: 'Партнёрам',
        link: '',
    }];

    const [currentPage, setCurrentPage] = React.useState(0)


    return (
        <div className="swiper">

            <div className="swiper__navbar">
                <ul className="swiper__navbar__list">
                    <li className="swiper__navbar__list__link">Состав</li>
                    <li className="swiper__navbar__list__link">Как использовать</li>
                    <li className="swiper__navbar__list__link">Цена</li>
                    <li className="swiper__navbar__list__link">Доставка</li>
                    <li className="swiper__navbar__list__link">Любимые вкусы</li>
                    <li className="swiper__navbar__list__link">Партнёрам</li>
                </ul>
                <div className="swiper__navbar__catalog">
                    Каталог
                </div>
            </div>

            <div className="main-block">

                <div className="swiper__sidebar">
                    <div className="sidebar-container">

                    <div className="swiper__sidebar__hash">
                        <span>#</span>лёдвлёд
                    </div>
                    <div className="swiper__sidebar__progress-line">
                        <div className="swiper__sidebar__progress-line__index">
                            0{currentPage + 1}
                        </div>
                        <div className="swiper__sidebar__progress-line__line-holder">
                            <div className="swiper__sidebar__progress-line__line-holder__line">

                            </div>
                            {/* <div className="swiper__sidebar__progress-line__line-holder__arrows">

                            </div> */}
                        </div>
                        <div className="swiper__sidebar__progress-line__page">
                            {links[currentPage].title}
                        </div>
                        </div>
                    </div>

                </div>

                <div className="swiper__main">
                    {/*  */}
                    <Composition />
                </div>
            </div>

            <div className="swiper__footer">
                <div className="swiper__footer__wrapper">
                    <div className="swiper__footer__wrapper__logo">
                        <img src={logo_whiteSVG} alt="logo_whiteSVG" />
                        <p>
                            Сделано в
                            <span>
                                REJI
                            </span>
                        </p>
                    </div>
                    <div className="swiper__footer__wrapper__feedback">
                        <div className="swiper__footer__wrapper__feedback__phone">
                            <span>
                                8 800 800 - 80 - 80
                            </span>
                        </div>
                        <div className="swiper__footer__wrapper__feedback__mail">
                            <span>
                                info@ledvled.ru
                            </span>
                        </div>
                        <div className="swiper__footer__wrapper__feedback__adress">
                            <span>
                                ООО «Глобал» г. Омск, ул. Звездова 129
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
