import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeScore} from "../redux/action";

class Counter extends React.Component {

	render() {
		return (
			<div className='counter'>
				<button className='counter-action decrement'
								onClick={() => this.props.changeScore(this.props.id,-1)}> - </button>
				<span className='counter-score'>{this.props.score}</span>
				<button className='counter-action increment'
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