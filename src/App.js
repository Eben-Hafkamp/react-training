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

    let character_str = '';

    if (typeof(event) !== 'undefined') {
      character_str = event.target.value;
      this.character_arr = event.target.value.split('');
    } 

    this.setState({
      input_value: character_str,
      characters: this.character_arr
    });

    console.log(this.state.input_value.length);

  }

  delete_clicked_char_handler = (index) => {

    this.character_arr.splice(index, 1);
    
    this.input_changed_handler();

  }

  render() {
    return (
      <div className="UsernameBuilder">
        <p>There are { this.state.input_value.length } characters.</p>
        <input 
        type="text" 
        onChange={ (event) => this.input_changed_handler(event) } 
        value={ this.state.characters.join('') }/>
        <ValidationComponent length={ this.state.input_value.length } />
        { 
          /* Loop over the list of characters and ouput them as CharComponents in JSX */
          this.state.characters.map((char, index) => {
            return <CharComponent 
            click={ () => this.delete_clicked_char_handler(index) } // JSX component requires method reference
            key={ index } 
            character={ char } />
          })
        }
      </div>
    );
  }

}

export default App;