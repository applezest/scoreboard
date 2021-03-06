import React from 'react';
import Counter from './Counter';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {removePlayer} from "../redux/action";

import styles from '../pages/Scoreboard.module.css'

class Player extends React.PureComponent{
	static propsType = {
		removePlayer: PropTypes.func,
		id: PropTypes.number,
		name: PropTypes.string,
		score: PropTypes.number,
		changeScore: PropTypes.func
	}
	render(){
		console.log(this.props.name, 'rendered');

		const {removePlayer, id, name, score} = this.props;

		return (
			<div className={styles.player}>
			<span className={styles['player-name']}>
				<button className={styles['remove-player']} onClick={() => removePlayer(id)}>x</button>
				{this.props.children}
				{name}
			</span>
				<Counter id={id} score={score} />
			</div>
		)
	}
	// shouldComponentUpdate(nextProps, nextState, nextContext) {
	// 	console.log('here-------------------------');
	// 	console.log(nextProps);
	// 	//return true;
	//
	// 	//score가 다를 경우만 true를 리턴
	// 	return this.props.score !==nextProps.score;
	// }
}

// action을 dispatch하는 펑션을 props로 mapping (자식이 부모와 통신)
const mapActionToProps = (dispatch) => ({
	// 왼쪽은 props, 오른쪽은 action
	removePlayer: (id) => dispatch(removePlayer(id))
})


export default connect(null, mapActionToProps)(Player);
