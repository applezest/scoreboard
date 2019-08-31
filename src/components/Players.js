import React from 'react';
import { Counter } from './Counter';

export class Player extends React.PureComponent{
	render(){
		console.log(this.props.name, 'rendered')

		return (
			<div className='player'>
			<span className='player-name'>
				<button className='remove-player' onClick={() => this.props.removePlayer(this.props.id)}>x</button>
				{this.props.name}
			</span>
				<Counter id={this.props.id} score={this.props.score} changeScore={this.props.changeScore}/>
			</div>
		)
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