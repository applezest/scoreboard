import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Player } from './components/Players';


class App extends React.Component {
  state = {
    players: [
      {name: 'JYJ', score: 0, id: 1},
      {name: 'HONG', score: 10, id: 2},
      {name: 'KIM', score: 20, id: 3},
      {name: 'PARK', score: 30, id: 4},
    ]
  }
  constructor(){
    super();
    this.handleChangeScore = this.handleChangeScore.bind(this);
  }

  render() {
    console.log('Apps.js',this);
    return (
      <div className='scoreboard'>
        <Header title='My Scoreboard' players={this.state.players} totalPlayers={this.state.players.length} />

        {
          this.state.players.map(player => (
            <Player name={player.name} score={player.score} key={player.id} id={player.id}
                    changeScore={this.handleChangeScore}
                    removePlayer={this.handleRemovePlayer}/>
          ))
        }
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
      const players2 = [ ...prevState.players ]; // 기존배열을 스프레드연산자(...)를 사용해 새로운 배열로 옮겨담는것
      players2.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      })
      return {players: players2}
    })

  }
}

export default App;