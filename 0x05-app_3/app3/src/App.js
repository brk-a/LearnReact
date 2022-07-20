import React, {Component} from 'react';
import Characters from './Characters';
import AddCharacter from './AddCharacter';
import './App.css';

class App extends Component{
  state = {
    characterArray: [
      {name: 'Goat Matata', age: 35, id: 0},
      {name: 'Kaka Sungura', age: 15, id: 1},
      {name: 'Dada Ng\'ombe', age: 22, id: 2},
      {name: 'Mzee Kobe', age: 135, id: 3},
      {name: 'Paka the Cat', age: 40, id: 4}
    ]
  }

  addCharacter = (character) => {
    character.id = Math.random();
    let characterArray = [...this.state.characterArray, character];
    // console.log(characterArray);
    this.setState({
      characterArray: characterArray
    });
    // console.log(characterArray);
  }

  deleteCharacter = (id) => {
    let characterArray = this.state.characterArray.filter(character => {
      return character.id !== id;
    });
    this.setState({
      characterArray: characterArray
    });
  }

  render() {
    return(
      <div className="App">
        <h1>World of Characters</h1>
        <p>Hello, characters!</p>
        <Characters characterArray={this.state.characterArray} deleteCharacter={this.deleteCharacter}/>
        <AddCharacter addCharacter={this.addCharacter}/>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
