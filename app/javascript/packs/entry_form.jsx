import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import Stopwatch from './entry_form/stopwatch'

import 'bootstrap'

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { twitter_handle: "", name: "", timing: 0, nameClass: "hidden", twitterClass: "", uniqueId: 1 }

    this.handleChange = this.handleChange.bind(this)
    this.handleTimingChange = this.handleTimingChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleTimingChange(timing) {
    this.setState({ timing: timing })
  }

  handleSubmit(event) {
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

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} key={this.state.uniqueId}>
        <div className="row">
          <div className="col">
            <input name="twitter_handle" type="text" placeholder="@yourname" onChange={this.handleChange} className={this.state.twitterClass} />
            <input name="name" type="text" placeholder="Your Name" onChange={this.handleChange} className={this.state.nameClass} />
          </div>
        </div>

        <Stopwatch handleTimingFunction={this.handleTimingChange} />

        <div className="row">
          <div className="col">
            <input type="submit" value="Enter!" />
          </div>
        </div>
      </form>
    );
  }
}

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <EntryForm />,
    document.getElementById('entryForm').appendChild(document.createElement('div')),
  )
})


