import React from 'react'

// import itemCircleSVG from './../../../assets/images/item-circle.svg';

import './Composition.scss'

export default function Composition() {
    return (
        <div className='composition'>
            <div className="composition__wrapper">
                <div className="composition__wrapper__title">
                    <h2>
                        Натуральные
                        ингредиенты
                    </h2>
                </div>
                <div className="composition__wrapper__under-title">
                    <div className="composition__wrapper__under-title__button">

                    </div>
                    <div className="composition__wrapper__under-title__description">
                        <p className='composition__wrapper__under-title__description__top'>
                            Наше мороженное не содержит химии и вредных добавок
                        </p>
                        <h3 className='composition__wrapper__under-title__description__list-title'>
                            В составе:
                        </h3>
                        <ul className="composition__wrapper__under-title__description__list">
                            <li className="composition__wrapper__under-title__description__list__item">
                                Вода
                            </li>
                            <li className="composition__wrapper__under-title__description__list__item">
                                Ароматизатор
                            </li>
                            <li className="composition__wrapper__under-title__description__list__item">
                                Сахар
                            </li>
                            <li className="composition__wrapper__under-title__description__list__item">
                                Стабилизатор
                                <span>
                                    произовдятся на основе натуральных фруктов и ягод
                                </span>
                            </li>
                        </ul>
                        <p className="composition__wrapper__under-title__description__bottom">
                            Мороженное <span>Лёд влёд</span>можно заморозить и съесть,
                            просто выпить или приготвоить освежающий коктейль
                        </p>
                    </div>
                </div>
                <div className="composition__wrapper__circle">
                    <svg width="582" height="582" viewBox="0 0 582 582" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="291" cy="291" r="291" fill="#FBB35E" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
