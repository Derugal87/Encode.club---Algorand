import {Component} from 'react'

import 'reactjs-popup/dist/index.css'

import ScoreView from '../ScoreView'

import GameResultsView from '../GameResultsView'

import './index.css'

import {
  MainContainer,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RpsPage extends Component {
  state = {
    isShow: true,
    newArray: [choicesList[0], choicesList[1]],
    score: 0,
  }

  restartGame = () => this.setState({isShow: true})

  render() {
    const {isShow, newArray, text} = this.state
    return (
      <MainContainer>
        <ScoreView  />
        <GameResultsView
          choicesList={choicesList}
          text={text}
          isShow={isShow}
          newArray={newArray}
          restartGame={this.restartGame}
        />
      </MainContainer>
    )
  }
}

export default RpsPage
