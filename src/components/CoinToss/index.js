// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHead: 1, heads: 0, tails: 0}

  onClickTossCoin = () => {
    const randomNumber = Math.round(Math.random() + 1)
    console.log(randomNumber)
    if (randomNumber === 1) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        isHead: randomNumber,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        isHead: randomNumber,
      }))
    }
  }

  render() {
    const {isHead, heads, tails} = this.state
    const total = heads + tails
    const imageUrl =
      isHead === 1
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="app-container">
        <div className="cointoss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <button
            type="button"
            onClick={this.onClickTossCoin}
            className="button"
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result-total">Total: {total}</p>
            <p className="result-heads">Heads: {heads}</p>
            <p className="result-tails">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
