import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import Stopwatch from './entry_form/stopwatch'

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { twitter_handle: "", name: "", timing: 0, nameClass: "hidden", twitterClass: "" }

    this.handleChange = this.handleChange.bind(this);
    this.handleTimingChange = this.handleTimingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log(res);
        console.log(res.data);
      })

    event.preventDefault();
  }

  render() {
    return (
      <div class="container">
        <form onSubmit={this.handleSubmit}>
          <div class="row">
            <div class="col">
              <input name="twitter_handle" type="text" placeholder="@yourname" onChange={this.handleChange} className={this.state.twitterClass} />
              <input name="name" type="text" placeholder="Your Name" onChange={this.handleChange} className={this.state.nameClass} />
            </div>
          </div>

          <Stopwatch handleTimingFunction={this.handleTimingChange} />

          <div class="row">
            <div class="col">
              <input type="submit" value="Enter!" />
            </div>
          </div>
        </form>
      </div>
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


