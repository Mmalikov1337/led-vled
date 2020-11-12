import React from 'react';
import Scroll from 'react-scroll';
import { BrowserRouter, Route } from 'react-router-dom'

import {
	StartPage,
	Swiper
} from './components/';

import prod_1_5PNG from './assets/images/1_5.png';
import prod_1_4PNG from './assets/images/1_4.png';
import prod_1_3PNG from './assets/images/1_3.png';
import prod_1_2PNG from './assets/images/1_2.png';
import prod_1_1PNG from './assets/images/1_1.png';

import './app.scss';

const tempItems = [
	{
		pic: prod_1_4PNG,
		mainColor: "#FBB35E",
		sideColor: "#FCCA8E",
		rating: "5.0",
		title: 'Персик',
		description: "Натуральные ингредиенты",
		price: "10",
		mesure: 'шт',
		properties: [
			"21 ккал",
			"200 мл"
		]
	}
	, {
		pic: prod_1_2PNG,
		mainColor: "#DBE4A7",
		sideColor: "#e6ecc1",
		rating: "5.0",
		title: 'Лимон',
		description: "Натуральные ингредиенты",
		price: "10",
		mesure: 'шт',
		properties: [
			"21 ккал",
			"200 мл"
		]
	}, {
		pic: prod_1_1PNG,
		mainColor: "#FF4E5A",
		sideColor: "#f46c81",
		rating: "4.8",
		title: 'Вишня',
		description: "Натуральные ингредиенты",
		price: "10",
		mesure: 'шт',
		properties: [
			"21 ккал",
			"200 мл"
		]
	},
	{
		pic: prod_1_5PNG,
		mainColor: "#2D1109",
		sideColor: "#4c342e",
		rating: "4.7",
		title: 'Coca-Cola',
		description: "Натуральные ингредиенты",
		price: "10",
		mesure: 'шт',
		properties: [
			"21 ккал",
			"200 мл"
		]
	}, {
		pic: prod_1_3PNG,
		mainColor: "#3F9B0B",
		sideColor: "#65af3c",
		rating: "5.0",
		title: 'Лимон',
		description: "Натуральные ингредиенты",
		price: "10",
		mesure: 'шт',
		properties: [
			"21 ккал",
			"200 мл"
		]
	},
];

const links = [
	{
		id: 'start_page',
		style: {}
	}, {
		id: 'swiper',
		style: {
			background: "#008CE6",
			opacity: "1",
		}
	}, {
		id: 'orderфываыап',
		style: {}
	}, {
		id: 'start_page_catalog',
		style: {}
	},
];

export default function App() {
	const [currentPages, setCurrentPages] = React.useState(0);
	const [swiperPage, setSwiperPage] = React.useState(0);
	const ref = React.useRef(null);
	const [selectedProductsQuantity, setSelectedProductsQuantity] = React.useState(
		localStorage.getItem("selectedProductsQuantity") ?
			JSON.parse(localStorage.getItem("selectedProductsQuantity")) :
			() => {
				localStorage.setItem("selectedProductsQuantity", JSON.stringify([...Array(5)].fill(0)));    ////
				return [...Array(tempItems.length - 1)].fill(0);
			}
	);
	const [boxesQuantity, setBoxesQuantity] = React.useState(
		localStorage.getItem("boxesQuantity") ?
			localStorage.getItem("boxesQuantity") :
			() => {
				localStorage.setItem("boxesQuantity", "1");    ////
				return 1;
			}
	);
	const increaseBoxQuantity = () => setBoxesQuantity(~~boxesQuantity + 1);

	const decreaseBoxQuantity = () => setBoxesQuantity(~~boxesQuantity > 0 ? ~~boxesQuantity - 1 : ~~boxesQuantity);


	const increaseSelectedQuantity = (index) => {
		const temp = selectedProductsQuantity.concat();
		temp[index]++;
		setSelectedProductsQuantity(temp);
		localStorage.setItem("selectedProductsQuantity", JSON.stringify(temp));
	};

	const decreaseSelectedQuantity = (index) => {
		const temp = selectedProductsQuantity.concat();
		if (temp[index] > 0) {
			temp[index]--;
			setSelectedProductsQuantity(temp);
			localStorage.setItem("selectedProductsQuantity", JSON.stringify(temp));
		};
	};
	const setSelectedQuantityToStorage = (index, value) => {
		const temp = selectedProductsQuantity.concat();
		temp[index] = value;
		setSelectedProductsQuantity(temp);
		localStorage.setItem("selectedProductsQuantity", JSON.stringify(temp));
	};
	const ChangeQuantity = {
		increaseSelectedQuantity: increaseSelectedQuantity,
		decreaseSelectedQuantity: decreaseSelectedQuantity,
		selectedProductsQuantity: selectedProductsQuantity,
		setSelectedQuantityToStorage: setSelectedQuantityToStorage,///

		boxesQuantity: boxesQuantity,
		setBoxesQuantity: setBoxesQuantity,
		increaseBoxQuantity: increaseBoxQuantity,
		decreaseBoxQuantity: decreaseBoxQuantity
	};
	React.useEffect(() => {
		const scrollToId = (indexScroll) => {
			Scroll.scroller.scrollTo(links[indexScroll].id, {
				duration: 1000,
				delay: 0,
				smooth: true
			});
		};
		scrollToId(currentPages);
	}, [currentPages, links]);


	const toBottom = () => setCurrentPages(currentPages < links.length - 1 ? currentPages + 1 : links.length - 1);

	function scrollByWheel(value) {
		if (ref.current) console.log(ref.current.className);
		if (ref.current && ref.current.className === "swiper__main") {
			if (!(ref.current.contains(value.target)) || swiperPage < 1 || swiperPage > 6)
				if (value.deltaY > 0) setCurrentPages(1);
				else setCurrentPages(0);
		} else {
			if (ref.current.className === "order") { setCurrentPages(2); return };
			if (value.deltaY > 0) setCurrentPages(3);
			else setCurrentPages(0);
		}
	}

	return (
		<div className='app' onWheel={(e) => scrollByWheel(e)}>
			<BrowserRouter>
				<div className="app__container" onTouchMove={(e) => console.log(e)}>
					<StartPage id={links[0].id}
						nextPage={() => toBottom()}
						link={ref}
						toComposition={() => setCurrentPages(3)}
						ChangeQuantity={ChangeQuantity}
						tempItems={tempItems}
						links={links}
						prewPage={() => setCurrentPages(0)}
					/>
				</div>
				<div className="app__container blue" style={links[currentPages].style} >
					<Route exact path="/">
						<Swiper
							id={links[1].id}
							link={ref}
							setSwiperPage={(page) => setSwiperPage(page)}
							ChangeQuantity={ChangeQuantity}
							tempItems={tempItems}
							toStarterPage={() => setCurrentPages(0)} />
					</Route>
				</div>
			</BrowserRouter>
		</div>
	)
}
