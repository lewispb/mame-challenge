import React from 'react'

class Stopwatch extends React.Component {

  state = {
    status: false,
    runningTime: 0
  }

  constructor(props) {
    super()
  }

  handleClick = (event) => {
    event.preventDefault();

    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - this.state.runningTime
        this.timer = setInterval(() => {
          let runningTime = Date.now() - startTime
          this.setState({ runningTime: runningTime })
          this.props.handleTimingFunction(runningTime)
        });
      }
      
      return { status: !state.status }
    });
  }

  handleReset = (event) => {
    event.preventDefault()

    clearInterval(this.timer)
    this.setState({ runningTime: 0, status: false })
  }

  render() {
    const { status, runningTime } = this.state;
    return (
      <div className="row stopwatch">
        <div className="col-md-6">
          <p className="runningTime">{parseFloat(runningTime / 1000).toFixed(3)}s</p>
        </div>
        <div className="col-md controls">
          <button className="btn-link" onClick={this.handleReset}>Reset</button>
          <button className={'startstop ' + (status ? 'btn-danger' : 'btn-success')} onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
