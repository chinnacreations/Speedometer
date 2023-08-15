import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevSpeed => ({speed: prevSpeed.speed + 10}))
    }
  }

  onApplyBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevSpeed => ({speed: prevSpeed.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-con" alt="speedometer">
        <h1 className="heading">Speedometer</h1>

        <img
          className="img"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="limit">
          Speed Is <span className="span">{speed}mph</span>
        </h1>
        <p className="desc">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="btn1" type="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="btn2" type="button" onClick={this.onApplyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
