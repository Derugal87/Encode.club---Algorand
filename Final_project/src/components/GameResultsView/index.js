import {
  GameViewContainer,
  GameButton,
  GameImage,
} from './styledComponents'

import './index.css'

const GameResultsView = props => {
  const {choicesList, isShow, checkResult} = props
  const showGame = () => (
    <GameViewContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameButton>
        </>
      )}
    </GameViewContainer>
  )
  return showGame()
}

export default GameResultsView
