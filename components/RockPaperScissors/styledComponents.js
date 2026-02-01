import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 20px;
  color: #ffffff;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #ffffff;
  padding: 10px;
  border-radius: 10px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
`

export const ScoreText = styled.p`
  margin: 0;
  color: #223a5f;
`

export const ScoreValue = styled.p`
  margin: 0;
  font-size: 24px;
  font-family: Roboto;
  color: #223a5f;
`

export const ChoicesList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
`

export const ChoiceButton = styled.button`
  background: transparent;
  border: none;
  margin: 20px;
  cursor: pointer;
`

export const ChoiceImage = styled.img`
  width: 150px;
`

export const ResultView = styled.div`
  text-align: center;
  margin-top: 40px;
`

export const ResultImages = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`

export const ResultText = styled.p`
  font-size: 24px;
  font-family: Bree Serif;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`

export const RulesButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ffffff;
  color: #223a5f;
  padding: 10px;
  border-radius: 6px;
  border: none;
`

export const RulesImage = styled.img`
  width: 100%;
`
