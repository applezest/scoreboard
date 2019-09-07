import React from 'react';
import {Home} from "./Home";
import {Heroes} from "./Heroes";
import {Scoreboard} from "./Scoreboard";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export class Root extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<>
					<p>공통메뉴 영역</p>
					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route path="/heroes" component={Heroes}></Route>
						<Route path="/scoreboard" component={Scoreboard}></Route>
					</Switch>
				</>
			</BrowserRouter>
		);
	}
}
     