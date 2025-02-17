import {Component} from 'react'
import './index.css'

class Clock extends Component {
  /* constructor(props) {
       super(props)
       this.state = {date: new Date()}
    } */ //This is older syntax
  
  state = {date: new Date()}; // This is modren syntax, this also called the constructor() function
  
  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick = () => {
    this.setState({
      date: new Date(),
    })
  }
  render() {
    const {date} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Clock
