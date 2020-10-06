import React from 'react';
import Scroll from 'react-scroll'

import Elements from './Elements/';

import logo_whiteSVG from './../../assets/images/logo_white.svg';
// import swipe_downSVG from './../../assets/images/swipe_down.svg';

import './Swiper.scss';

// Scroll.Events.registered()

export default function Swiper({id, link, setSwiperPage}) {

	const links = [{
		title: 'Состав',
		id: 'composition',
	}, {
		title: 'Как использовать',
		id: 'usage',
	}, {
		title: 'Цена',
		id: 'price',
	}, {
		title: 'Доставка',
		id: 'delivery',
	}, {
		title: 'Любимые вкусы',
		id: 'tastes',
	}, {
		title: 'Партнёрам',
		id: 'partners',
	}];

	// const scrollToId = (indexScroll) => {
	// 	Scroll.scroller.scrollTo(links[indexScroll].id, {
	// 		duration: 1000,
	// 		delay: 0,
	// 		smooth: true,
	// 		containerId: 'elements',
	// 	})
	// }
	const [currentPage, setCurrentPage] = React.useState(0)

	const [active, setActive] = React.useState([false, false]);

	React.useEffect(() => {
		// setTimeout(() => {
			
			setSwiperPage(currentPage)
		// }, 3000);
		// scrollToId(currentPage)
	}, [currentPage])

	const arrowSVG = (toUp, func) => {
		return (
			<div className={`swipe-arrow ${toUp ? 'down' : 'up'}`}
				onMouseEnter={() => setActive(toUp ? [true, false] : [false, true])}
				onMouseLeave={() => setActive(toUp ? [false, false] : [false, false])}
				onClick={func}>

				<svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.7804 12.1054L19.6805 3.2134C19.8865 3.00774 20 2.7332 20 2.44046C20 2.14773 19.8865 1.87319 19.6805 1.66753L19.0252 1.01269C18.5982 0.586589 17.9042 0.586589 17.4779 1.01269L10.0041 8.47953L2.52209 1.00441C2.31608 0.798748 2.04145 0.685195 1.7486 0.685195C1.45543 0.685195 1.1808 0.798747 0.974625 1.00441L0.319508 1.65924C0.113495 1.86507 -6.36262e-08 2.13945 -7.64339e-08 2.43218C-8.92416e-08 2.72491 0.113495 2.99945 0.319507 3.20511L9.22773 12.1054C9.43439 12.3116 9.71033 12.4248 10.0037 12.4241C10.2981 12.4248 10.5739 12.3116 10.7804 12.1054Z"
						fill={`${active[toUp ? 0 : 1] ? 'white' : '#56BDFF'}`} />
				</svg>

			</div>
		)
	}

	const toTop = () => setCurrentPage(currentPage < links.length - 1 ? currentPage + 1 : links.length - 1)
	const toBottom = () => setCurrentPage(currentPage > 0 ? currentPage - 1 : 0)

	return (
		<div className="swiper" id = {id}>

			<div className="swiper__navbar">
				<ul className="swiper__navbar__list">
					{
						links.map((it, index) => (
							<li className="swiper__navbar__list__link" onClick={() => setCurrentPage(index)} key={index}>
								{it.title}
							</li>
						))
					}
				</ul>
				<div className="swiper__navbar__catalog">
					Каталог
                </div>
			</div>

			<div className="main-block" id='main-block'>

				<div className="swiper__sidebar">
					<div className="sidebar-container">

						<div className="swiper__sidebar__hash">
							<p>
								<span>#</span>лёдвлёд
                            </p>
						</div>

						<div className="swiper__sidebar__progress-line">
							<div className="swiper__sidebar__progress-line__index">
								0{currentPage + 1}
							</div>
							<div className="swiper__sidebar__progress-line__line-holder">
								<div className="swiper__sidebar__progress-line__line-holder__line">

								</div>
								<div className="swiper__sidebar__progress-line__line-holder__arrows">
									{arrowSVG(true, toTop)}
									{arrowSVG(false, toBottom)}
								</div>
							</div>
							<div className="swiper__sidebar__progress-line__page">
								{links[currentPage].title}
							</div>
						</div>
					</div>

				</div>

				<div className="swiper__main" ref = {link}>{/* */}
					<Elements toTop = {toTop} toBottom = {toBottom} currentPage = {currentPage}/>
				</div>
			</div>

			<div className="swiper__footer">
				<div className="swiper__footer__wrapper">
					<div className="swiper__footer__wrapper__logo">
						<img src={logo_whiteSVG} alt="logo_whiteSVG" />
						<p>
							Сделано в <span>REJI</span>
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
