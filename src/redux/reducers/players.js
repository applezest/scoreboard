import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, UPDATE_TITLE} from "../actionType";

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
		case CHANGE_SCORE:
			state.players.forEach(player => {
				if (player.id === action.payload.id){
					player.score += action.payload.delta;
				}
			})
			return {
				...state,
				players: [
					...state.players
				]
			}
		case REMOVE_PLAYER:
			const index = state.players.findIndex(player => player.id === action.payload.id)
			state.players.splice(index, 1);
			return {
				...state,
				players: [
					...state.players
				]
			}
		case UPDATE_TITLE:
			state.title = action.title;
			return {
				...state
			}

		default:
			return state;
	}
}