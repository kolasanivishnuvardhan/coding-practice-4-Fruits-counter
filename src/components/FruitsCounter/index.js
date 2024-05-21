import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}
  onEatMango = ()=>{
    this.setState((prevState)=>{
      return {mango:prevState.mango+1}
    })
  }
  onEatBanana = ()=>{
    this.setState((prevState)=>{
      return {banana:prevState.banana+1}
    })
  }

  render() {
    const {mango,banana} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="span">{mango}</span> mangoes
            <span className="span"> {banana}</span> bananas
          </h1>
          <div className="fruits">
            <div className="mango-conatiner">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button className="btn" type="button" onClick={this.onEatMango}>Eat Mango</button>
            </div>
            <div className="mango-conatiner">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button className="btn" type="button" onClick={this.onEatBanana}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
