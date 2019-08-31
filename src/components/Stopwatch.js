import React from 'react';

export class Stopwatch extends React.Component {
	tickRef;

	state = {
		isRunning: false
	}

	handleStopwatch = () => {
		this.setState(prevState => ({isRunning: !prevState.isRunning}))
	}

	render() {
		return (
			<div className="stopwatch">
				<h2>Stopwatch</h2>
				<span className="stopwatch-time">0</span>
				<button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
				<button>Reset</button>
			</div>
		);
	}

	tick = () => {
		// time update logic
	}

	// DOM이 렌더링 된 직후에 호출되는 라이프 사이클. 네트워크 호출
	componentWillMount() {
		this.tickRef = setInterval(this.tick, 1000);
		console.log('setInterval');
	}

	// DOM이 파괴되기 직전에 호출되는 라이프 사이클. 리소스 해제 등등
	componentWillUnmount() {
		clearInterval(this.tickRef);
		console.log('clearInterval');
	}

}
     