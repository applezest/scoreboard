import {combineReducers} from "redux";
import {playerReducer} from "./players";

export const allReducers = combineReducers({
	playerReducer
	//playerReducer: playerReducer
})

// Q: 초기 state를 적으시오.
/*
{
	playerReducer: {
		title: 'My Scoreboard'
	}
}
*/