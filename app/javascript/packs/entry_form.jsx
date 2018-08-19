import React from 'react'
import ReactDOM from 'react-dom'
import Stopwatch from './entry_form/stopwatch'
import axios from './axios-config'

import 'bootstrap'

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      twitter_handle: "",
      name: "",
      timing: 0,
      nameClass: "hidden",
      twitterClass: "",
      uniqueId: 1,
      formValid: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleTimingChange = this.handleTimingChange.bind(this)
    this.handleToggleInput = this.handleToggleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value}, () => { this.validateForm() });
  }

  handleTimingChange(timing) {
    this.setState({ timing: timing })
  }


  handleToggleInput(event) {
    event.preventDefault();

    if(this.state.nameClass == "hidden") {
      this.setState({ nameClass: "", twitterClass: "hidden" })
    } else {
      this.setState({ nameClass: "hidden", twitterClass: "" })
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if(!this.state.formValid) {
      console.log("Invalid")
      return;
    }

    const entry = {
      twitter_handle: this.state.twitter_handle,
      name: this.state.name,
      timing: this.state.timing
    };

    axios.post(Routes.entries_path(), { entry })
      .then(res => {
        $('#successModal').modal()
        this.setState({ uniqueId: Math.floor(Math.random() * 100000) + 1 })
        console.log('Finish')
      })
  }

  validateForm() {
    this.setState({ formValid: (this.state.twitter_handle.length != 0 || this.state.name.length != 0) })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} key={this.state.uniqueId}>
        <div className="row">
          <div className="col">
            <input name="twitter_handle"
                   type="text"
                   placeholder="@your_twitter_name"
                   autoCapitalize="none"
                   onChange={this.handleChange}
                   className={this.state.twitterClass} />
            <input name="name"
                   type="text"
                   placeholder="Your Name"
                   autoCapitalize="none"
                   onChange={this.handleChange}
                   className={this.state.nameClass} />
            <p>{ this.state.formValid ? '' : 'Required' }</p>
          </div>
        </div>

        <Stopwatch handleTimingFunction={this.handleTimingChange} />

        <div className="row">
          <div className="col">
            <button className="btn-link toggleInput" onClick={this.handleToggleInput}>♺</button>
            <input disabled={!this.state.formValid} type="submit" value="Enter!" />
          </div>
        </div>
      </form>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <EntryForm />,
    document.getElementById('entryForm').appendChild(document.createElement('div')),
  )
})


