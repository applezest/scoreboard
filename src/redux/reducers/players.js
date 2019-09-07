import {ADD_PLAYER} from "../actionType";

let maxId = 4;

const playerInitialState = {
	title: 'My Scoreboard',
	players: [
		{name: 'JYJ', score: 0, id: 1},
		{name: 'HONG', score: 1, id: 2},
		{name: 'KIM', score: 2, id: 3},
		{name: 'PARK', score: 3, id: 4},
	]
}

// state = playerInitialState... default 문법. undefined가 들어올 때 기본값 설정하는 것.
export const playerReducer = (state = playerInitialState, action) => {
	switch (action.type) {
		case ADD_PLAYER:
			// 기존 player에 name을 가진 player 객체를 추가
			state.players.push({name: action.name, score:0, id: ++maxId});
			return {
				...state,
				players: [
					...state.players
				]
			}
		default:
			return state;
	}
}