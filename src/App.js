import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    input_value: '',
    characters: []
  }

  character_arr;

  input_changed_handler = (event) => {
    this.character_arr = event.target.value.split('');
    this.setState({
      input_value: event.target.value,
      characters: this.character_arr
    });
  }

  delete_clicked_char_handler = (index) => {
    this.character_arr.splice(index, 1);
    this.setState({
      input_value: this.character_arr.join(''),
      characters: this.character_arr
    });
  }

  render() {
    // Can also store JSX components over here in a variable (array) and then spit it out with {} below
    return (
      <div className="UsernameBuilder">
        <p>There are { this.state.input_value.length } characters.</p>
        <input type="text" onChange={ this.input_changed_handler } value={ this.state.characters.join('') }/>
        <ValidationComponent length={ this.state.input_value.length } />
        { /* Loop over the list of characters and ouput them as CharComponents in JSX */
          this.state.characters.map((char, index) => {
            return <CharComponent // JSX component requires method reference
            click={ () => this.delete_clicked_char_handler(index) } 
            key={ index } 
            character={ char } />
          })
        }
      </div>
    );
  }

}

export default App;