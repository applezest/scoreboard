import React from 'react';
import './App.css';
import Header from './components/Header'; // named import
import { Player } from './components/Players';
import { AddPlayerForm } from './components/AddPlayerForm';
import {connect} from "react-redux";


class App extends React.Component {

  constructor(){
    super();
    this.handleChangeScore = this.handleChangeScore.bind(this);
  }

  render() {
    console.log('Apps.js',this);
    return (
      <div className='scoreboard'>
        <Header players={this.props.players} totalPlayers={this.props.players.length} />

        {
          this.props.players.map(player => (
            <Player name={player.name} score={player.score} key={player.id} id={player.id}
                    changeScore={this.handleChangeScore}
                    removePlayer={this.handleRemovePlayer}/>
          ))
        } {/*배열리턴*/}

        {/*//2-2) 콜백펑션을 props로 내려주기*/}
				<AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }

  // 1) player 삭제 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log(id);

    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  handleChangeScore(id, delta){
    console.log(id, delta);
    this.setState(prevState => {
      // id에 해당되는 player를 찾은 다음 score에 delta를 더한다.
      const players2 = [ ...prevState.players ]; // 기존배열을 스프레드연산자(...)를 사용해 새로운 배열로 옮겨담는것. []는 deep copy
      players2.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      })
      return {players: players2}
    })
  }


  // 2-1) 콜백펑션 정의
  handleAddPlayer = (name) => {
  	console.log(name);
		// add player 로직
		this.setState(prevState => {
			// 원본 배열을 훼손하면 안된다. => deep copy. 새로운 배열에 기존 배열을 옮겨담음.
			const players = [ ...prevState.players ];

			players.push({ name, score:0, id: ++this.maxId });

			return {players};
		})
	}
}

// store에 있는 state를 props로 mapping
const mapStateToProps = (state) => ({
  //왼쪽은 자식이 물려받을 props, 오른쪽은 부모(store)에 있는 state = {product: xxx, user: yyy}
  players: state.playerReducer.players
})

export default connect(mapStateToProps)(App);