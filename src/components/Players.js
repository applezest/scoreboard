import React from 'react';
import { Counter } from './Counter';

export class Player extends React.Component{
	render(){
		console.log(this.props.name, 'rendered')

		const {removePlayer, id, name, score, changeScore} = this.props;

		return (
			<div className='player'>
			<span className='player-name'>
				<button className='remove-player' onClick={() => removePlayer(id)}>x</button>
				{name}
			</span>
				<Counter id={id} score={score} changeScore={changeScore}/>
			</div>
		)
	}
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('here-------------------------')
		console.log(nextProps);
		//return true;

		//score가 다를 경우만 true를 리턴
		return this.props.score !==nextProps.score;
	}
}

/*
export const Player = (props) => (
	<div className='player'>
    <span className='player-name'>
      <button className='remove-player' onClick={() => props.removePlayer(props.id)}>x</button>
			{props.name}
    </span>
		<Counter id={props.id} score={props.score} changeScore={props.changeScore}/>
	</div>
);
*/