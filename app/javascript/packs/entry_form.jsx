import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import Stopwatch from './entry_form/stopwatch'

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { twitter_handle: '', name: '', timing: 0}

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
    console.log('A name was submitted: ' + this.state.name + ' : ' + this.state.timing);

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
      <form onSubmit={this.handleSubmit}>
        <input name="twitter_handle" type="text" placeholder="@yourname" onChange={this.handleChange} />
        <input name="name" type="text" placeholder="Your Name" onChange={this.handleChange} />

        <Stopwatch handleTimingFunction={this.handleTimingChange} />

        <input type="submit" value="Submit" />
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


