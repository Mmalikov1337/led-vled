import type { AppProps } from "next/app";
import React from "react";
// import { Provider } from "react-redux";
// import { createWrapper } from "next-redux-wrapper";

import Head from "next/head";

import "../styles/index.scss";
// import store from "@src/store/store";
const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Netsyde</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="theme-color" content="#FFFFFF" />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			{/* <Provider store={store}> */}
				<Component {...pageProps} />
			{/* </Provider> */}
		</>
	);
};
// const makeStore = () => store;
// const wrapper = createWrapper(makeStore)
// export default wrapper.withRedux(App);
export default App;
