import React from 'react';
import Scroll from 'react-scroll';

import {
	StartPage,
	Swiper
} from './components/';

import './app.scss';

export default function App() {
	const links = [{
		id: 'start_page',
	}, {
		id: 'swiper',
	},];

	
	const [currentPages, setCurrentPages] = React.useState(0);
	const [swiperPage, setSwiperPage] = React.useState(0);
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

	const toBottom = () => setCurrentPages(currentPages < links.length - 1 ? currentPages + 1 : links.length - 1)
	const toTop = () => setCurrentPages(currentPages > 0 ? currentPages - 1 : 0)

	function z(value) {
		console.log(swiperPage);
		if (!(ref.current.contains(value.target)) || swiperPage < 1 || swiperPage > 6) {
			if (value.deltaY > 0)
				toBottom();
			else
				toTop();
		}
	}


	return (
		<div className='app' onWheel={(e) => z(e)}>
			<div className="app__container">
				<StartPage id={links[0].id} nextPage = {() => toBottom()}/>
			</div>
			<div className="app__container blue">
				{/* <div className="app__container"> */}
					<Swiper id={links[1].id} link={ref} setSwiperPage={(page) => setSwiperPage(page)} />
				{/* </div> */}
			</div>
		</div>
	)
}
