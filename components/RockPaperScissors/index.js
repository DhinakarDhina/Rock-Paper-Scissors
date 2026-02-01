import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  AppContainer,
  Header,
  ScoreContainer,
  ScoreText,
  ScoreValue,
  ChoicesList,
  ChoiceButton,
  ChoiceImage,
  ResultView,
  ResultImages,
  ResultText,
  PlayAgainButton,
  RulesButton,
  RulesImage,
} from './styledComponents'

class RockPaperScissors extends Component {
  state = {
    score: 0,
    showResult: false,
    yourChoice: null,
    opponentChoice: null,
    resultText: '',
  }

  getResult = (your, opponent) => {
    if (your === opponent) return 'IT IS DRAW'
    if (
      (your === 'ROCK' && opponent === 'SCISSORS') ||
      (your === 'PAPER' && opponent === 'ROCK') ||
      (your === 'SCISSORS' && opponent === 'PAPER')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  onChoiceClick = choice => {
    const {choicesList} = this.props
    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    const result = this.getResult(choice.id, opponentChoice.id)

    this.setState(prev => ({
      yourChoice: choice,
      opponentChoice,
      resultText: result,
      showResult: true,
      score:
        result === 'YOU WON'
          ? prev.score + 1
          : result === 'YOU LOSE'
          ? prev.score - 1
          : prev.score,
    }))
  }

  playAgain = () => {
    this.setState({showResult: false})
  }

  renderPlayingView = () => {
    const {choicesList} = this.props
    return (
      <ChoicesList>
        {choicesList.map(each => (
          <ChoiceButton
            key={each.id}
            data-testid={`${each.id.toLowerCase()}Button`}
            onClick={() => this.onChoiceClick(each)}
          >
            <ChoiceImage src={each.imageUrl} alt={each.id} />
          </ChoiceButton>
        ))}
      </ChoicesList>
    )
  }

  renderResultView = () => {
    const {yourChoice, opponentChoice, resultText} = this.state

    return (
      <ResultView>
        <ResultImages>
          <div>
            <p>YOU</p>
            <ChoiceImage src={yourChoice.imageUrl} alt="your choice" />
          </div>
          <div>
            <p>OPPONENT</p>
            <ChoiceImage
              src={opponentChoice.imageUrl}
              alt="opponent choice"
            />
          </div>
        </ResultImages>
        <ResultText>{resultText}</ResultText>
        <PlayAgainButton onClick={this.playAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultView>
    )
  }

  render() {
    const {score, showResult} = this.state

    return (
      <AppContainer>
        <Header>
          <h1>Rock Paper Scissors</h1>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreValue>{score}</ScoreValue>
          </ScoreContainer>
        </Header>

        {showResult ? this.renderResultView() : this.renderPlayingView()}

        <Popup
          modal
          trigger={<RulesButton>Rules</RulesButton>}
          className="popup-content"
        >
          {close => (
            <>
              <button type="button" onClick={close}>
                <RiCloseLine />
              </button>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </>
          )}
        </Popup>
      </AppContainer>
    )
  }
}

export default RockPaperScissors
