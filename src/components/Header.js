import React from 'react';

//펑션 컴포넌트는 반드시 대문자로 시작
// react element를 리턴해야 한다.

export const Header = (props) => {
	console.log(props);
	// destruct assignment
	const {title, totalPlayers} = props;
	return (
		<header className="header">
			<h1 className="h1">{title}</h1>
			<span className='stats'>Players: {totalPlayers}</span>
		</header>
	);
}
