import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from "admin/bootstrap";
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import rootSaga from "admin/redux/sagas";
import store from "admin/store";

store.runSaga(rootSaga);

// Wrap the rendering in a function:
const render = Component => {
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<Component/>
			</BrowserRouter>
		</Provider>,
		document.getElementById('root')
	);
};

render(Bootstrap);

if (module.hot) {
	module.hot.accept('./bootstrap', () => {
		render(Bootstrap);
	});
}
