import React from 'react';

export const Stats = (props) => {
	// todo: 로직구현
	const totalPlayers = 0; //props.players
	const totalScore = 0; //props.players로 로직구현;

	return (
		<table className="stats">
			<tbody>
			<tr>
				<th>Players</th>
				<td>{totalPlayers}</td>
			</tr>
			<tr>
				<th>Total Points</th>
				<td>{totalPlayers}</td>
			</tr>
			</tbody>
		</table>
	);
}