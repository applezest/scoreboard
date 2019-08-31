import React from 'react';

export class AddPlayerForm extends React.Component {
	textInput = React.createRef();

	handleValueChange = (e) => {
		this.setState({value: e.target.value});
	}

	// 2-3) 부모에게서 받은 콜백 펑션을 호출
	handleSubmit = (e) => {
		console.log('submit');
		// submit의 기본 이벤트 막기
		e.preventDefault();

		const form = document.getElementById("form");
		const player = document.getElementById("player");

		console.log(player.validity.valid);
		console.log(form.checkValidity());

		// this.textInput.current === document.getElementById("player");
		this.props.addPlayer(this.textInput.current.value);

	}

	// 메소드
	/* </input>으로 반드시 닫아야한다. html이 아니고 jsx 객체이기 때문.*/
	/* type="submit"을 써줘야 html5 밸리데이션 체크가 가능하다. 안써주면 자바스크립트 밸리데이션 체크 사용해야함 */
	/* noValidate는 기본 html5 밸리데이션 사용하지 않겠다. (required 무시)*/
	render() {
		return (
			<form id="form" className="form" onSubmit={this.handleSubmit} noValidate>
				<input id="player" className="input" type="text" placeholder="enter a player's name" value={this.textInput} onChange={this.handleValueChange} ref={this.textInput} required></input>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		);
	}
}
