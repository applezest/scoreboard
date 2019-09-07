// action creator : 부모와 자식이 통신할때
export const addPlayer = (name) => ({
	type: 'ADD_PLAYER',
	payload: {
		name: name
	}
})