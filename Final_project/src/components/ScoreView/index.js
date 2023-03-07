import {
  ScoreContainer,
  ScoreNameContainer,
  ScoreName,
  Button
} from './styledComponents'

const ScoreView = () => {
  return (
    <ScoreContainer>
      <ScoreNameContainer>
        <ScoreName>
          ROCK  PAPER  SCISSORS
        </ScoreName>
      </ScoreNameContainer>
        <Button >Create_challenge</Button>
    </ScoreContainer>
  )
}

export default ScoreView
