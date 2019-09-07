import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {Root} from "./pages/Root";

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); //PWA(progressive web app)로 하지 않겠다.
// https://developers.google.com/web/fundamentals/primers/service-workers/