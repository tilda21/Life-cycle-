import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        globalTitle: '',
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleSubmit(event) {
    this.setState({globalTitle:  'My form - '});
    console.log('Title changed');
    event.preventDefault();
  }

  render() {
    console.log('Rendered Form');
    return (
      <>
        <h1>{this.state.globalTitle}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Text:
            <input 
                type="text" 
                value={this.state.title} 
                onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}


export default App;
