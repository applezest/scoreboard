// action creator : 부모와 자식이 통신할때
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "./actionType";

export const addPlayer = (name) => ({
	type: ADD_PLAYER,
	name // name: name과 동일
})

export const changeScore = (id, delta) => ({
	type: CHANGE_SCORE,
	payload: {
		id, // id: id와 동일
		delta // delta: delta와 동일
	}
})

export const removePlayer = (id) => ({
	type: REMOVE_PLAYER,
	payload: {
		id, // id: id와 동일
	}
})