import React from 'react';
import Header from "../components/Header";
import {CustomPlayer} from "../components/CustomPlayer";
import AddPlayerForm from "../components/AddPlayerForm";
import {connect} from "react-redux";

import '../index.css';
import styles from './Scoreboard.module.css'

class Scoreboard extends React.Component {
	getHighScore(){
		let highScore = 0;
		this.props.players.forEach(player => {
			if (player.score >= highScore) {
				highScore = player.score;
			}
		})
		return highScore;
	}

	render() {
		console.log('Scoreboard.js',this);
		return (
			<div className={styles.scoreboard}>
				<Header players={this.props.players} totalPlayers={this.props.players.length} />

				{
					this.props.players.map(player => (
						<CustomPlayer name={player.name} score={player.score} key={player.id} id={player.id}
													isHighScore={player.score === this.getHighScore()} />
					))
				} {/*배열리턴*/}

				<AddPlayerForm />
			</div>
		);
	}

}

// store에 있는 state를 props로 mapping
const mapStateToProps = (state) => ({
	//왼쪽은 자식이 물려받을 props, 오른쪽은 부모(store)에 있는 state = {product: xxx, user: yyy}
	players: state.playerReducer.players
})

export default connect(mapStateToProps)(Scoreboard);