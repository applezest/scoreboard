import React from 'react';

export const Stats = (props) => {
	console.log('Stats.js',this,props);

	let {totalPlayers, players} = props;
	totalPlayers = players.length; //props.players

	let totalScore = 0; //props.players로 로직구현;
	players.forEach(player => {
		totalScore += player.score;
	})

	return (
		<table className="stats">
			<tbody>
			<tr>
				<th>Players</th>
				<td>{totalPlayers}</td>
			</tr>
			<tr>
				<th>Total Points</th>
				<td>{totalScore}</td>
			</tr>
			</tbody>
		</table>
	);
}