import React from 'react';
import Scroll from 'react-scroll';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {
	StartPage,
	Swiper
} from './components/';

import './app.scss';

export default function App() {
	const links = [
		{ id: 'start_page', },
		{ id: 'swiper', },
		{ id: 'ad', },
	];

	const [currentPages, setCurrentPages] = React.useState(0);
	const [swiperPage, setSwiperPage] = React.useState(0);
	// const [state, setstate] = React.useState(0)
	const ref = React.useRef(null);

	React.useEffect(() => {
		const scrollToId = (indexScroll) => {
			Scroll.scroller.scrollTo(links[indexScroll].id, {
				duration: 1000,
				delay: 0,
				smooth: true
			});
		};
		scrollToId(currentPages);
	}, [currentPages, links])

	// React.useEffect(() => {
	// 	console.log(state);
	// }, [state])

	const toBottom = () => setCurrentPages(currentPages < links.length - 1 ? currentPages + 1 : links.length - 1)
	const toTop = () => setCurrentPages(currentPages > 0 ? currentPages - 1 : 0)

	function z(value) {//zxc
		console.log(ref.current.className);
		if (ref.current.className == "swiper__main") {
			if (!(ref.current.contains(value.target)) || swiperPage < 1 || swiperPage > 6) {
				if (value.deltaY > 0) {
					// toBottom();
					setCurrentPages(1)
				}
				else {
					// toTop();
					setCurrentPages(0)

				}
			}
		} else {
			if (value.deltaY > 0) {
				// toBottom();
				setCurrentPages(2)
			}
			else {
				// toTop();
				setCurrentPages(0)

			}
		}
	}

	return (
		<div className='app' onWheel={(e) => z(e)}>
			<BrowserRouter>
				<div className="app__container">
					<StartPage id={links[0].id} nextPage={() => toBottom()} />
					<Route exact path="/catalog">
						<div ref={ref} id="ad" className="zxc">
							{/* {setstate(1)} */}
							asd
						</div>
					</Route>
				</div>
				<div className="app__container blue">
					{/* <div className="app__container"> */}
					<Route exact path="/">
						{/* {setstate(22)} */}
						<Swiper id={links[1].id} link={ref} setSwiperPage={(page) => setSwiperPage(page)} />
					</Route>
					{/* </div> */}
				</div>
			</BrowserRouter>
		</div>
	)
}
