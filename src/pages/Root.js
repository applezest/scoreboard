import React from 'react';
import {Home} from "./Home";
import {Heroes} from "./Heroes";
import Scoreboard from "./Scoreboard";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Menu} from "./Menu";

export class Root extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<>
					<Menu></Menu>
					<Switch>
						<Route exact path="/" component={Home}></Route> {/* exact를 빼면 /를 포함한 모든 케이스에 호출됨. */}
						<Route path="/heroes" component={Heroes}></Route>
						<Route path="/scoreboard" component={Scoreboard}></Route>
					</Switch>
				</>
			</BrowserRouter>
		);
	}
}
     