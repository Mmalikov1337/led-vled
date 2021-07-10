import React from "react";
import Scroll from "react-scroll";
import Swiper from "./Swiper";
import Composition from "./Composition";
import IndexLayout from "@src/layouts/indexLayout";
import timeout from "@helpers/timeout";
import {Compositionlinks} from "@src/config"

export default function App() {
	const [currentPages, setCurrentPages] = React.useState(0);
	const [swiperPause, setSwiperPause] = React.useState(false);
	const ref = React.useRef<HTMLElement>(null);

	React.useEffect(() => {
		const scrollToId = (indexScroll: number) => {
			Scroll.scroller.scrollTo(Compositionlinks[indexScroll].id, {
				duration: 600,
				delay: 0,
				smooth: true,
				ignoreCancelEvents: true,
			});
		};
		scrollToId(currentPages);
	}, [currentPages, Compositionlinks]);

	const toBottom = () =>
		setCurrentPages(currentPages < Compositionlinks.length - 1 ? currentPages + 1 : Compositionlinks.length - 1);

	function scrollByWheel(value: WheelEvent) {
		if (!ref.current) {
			return;
		}
		if (ref.current.contains(value.target as HTMLElement)) {
			return;
		}
		if (value.deltaY < 0) {
			//вверх
			if (currentPages > 0) {
				//не первая страница
				setCurrentPages(currentPages - 1);
				return;
			} else {
				return;
			}
		}
		if (value.deltaY > 0) {
			//вниз 1                   1
			if (currentPages < Compositionlinks.length - 1) {
				//не последняя страница
				setCurrentPages(currentPages + 1);
				return;
			} else {
				return;
			}
		}
		return;
	}

	return (
		<IndexLayout
			onWheel={async (e: WheelEvent) => {
				if (swiperPause) return;
				if (!swiperPause) {
					setSwiperPause(true);
					scrollByWheel(e);
					await timeout(1000);
					setSwiperPause(false);
				}
			}}
			childrenTop={<Composition nextPage={toBottom} links={Compositionlinks} />}
			childrenBottom={
				<Swiper id={Compositionlinks[1].id} link={ref} toStarterPage={() => setCurrentPages(0)} />
			}
			bottomStyle={Compositionlinks[currentPages].style}
		/>
	);
}
