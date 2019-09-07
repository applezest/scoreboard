import React from 'react';
import { Stats } from './Stats';
import {Stopwatch} from "./Stopwatch";
import PropTypes from "prop-types";
import {connect} from "react-redux";

//펑션 컴포넌트는 반드시 대문자로 시작
// react element를 리턴해야 한다.

const Header = (props) => {
	console.log('header.js',this,props);
	// destruct assignment
	const {title, totalPlayers, players} = props;
	return (
		<header className="header">
			<Stats players={players} totalPlayers={totalPlayers} />
			<h1 className="h1">{title}</h1>
			<Stopwatch/>
		</header>
	);
}

Header.propTypes = {
	title: PropTypes.string,
	players: PropTypes.arrayOf(PropTypes.object)
}
Header.defaultProps = {
	title: 'Scoreboard'
}

// store의 title을 props로 내려받아서 화면에 표시하기
const mapStateToProps = (state) => ({
	title: state.playerReducer.title
})

export default connect(mapStateToProps)(Header);