import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeScore} from "../redux/action";
import classNames from 'classnames';

import styles from '../pages/Scoreboard.module.css';

class Counter extends React.Component {

	render() {
		return (
			<div className={styles.counter}>
				<button className={classNames(styles['counter-action'],styles.decrement)}
								onClick={() => this.props.changeScore(this.props.id,-1)}> - </button>
				<span className={styles.counterScore}>{this.props.score}</span>
				<button className={classNames(styles['counter-action'],styles.increment)}
								onClick={() => this.props.changeScore(this.props.id,1)}> + </button>
			</div>
		);
	}
}

Counter.propTypes = {
	id: PropTypes.number,
	score: PropTypes.number,
	changeScore: PropTypes.func
}

const mapActionToProps = (dispatch) => ({
	changeScore: (id, delta) => dispatch(changeScore(id, delta))
})

export default connect(null, mapActionToProps)(Counter);