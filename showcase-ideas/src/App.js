import logo from './logo.svg';
import './App.css';

import Card from './components/Card'; // help: [ https://bobbyhadz.com/blog/react-element-type-is-invalid-expected-string-but-got ] - use plain import for Class, use `{}` import for functions
import Grid from './components/Grid';

import React, { useState } from 'react';
// help: [ https://react-bootstrap.github.io/components/cards/ ] - this is one the ways to present this idea, like `Magic the Gathering` cards
// help: [ https://create-react-app.dev/docs/adding-custom-environment-variables ] - perhaps use environment variables to define behaviour of application - like path to folder containing ideas
// help: [ https://stackoverflow.com/questions/4816099/chrome-sendrequest-error-typeerror-converting-circular-structure-to-json ] - no longer works, need to figure out how to `flatten, replace, stringify` `.json`s
// help: [ https://reactjs.org/docs/components-and-props.html ]

{/* todo: need a parsing method for the subfolder containing ideas, based on the values returned by that, populate a grid of cards  */}
{/* todo: remember when card was clicked, display it underneath the card, perhaps change background based on how long ago link was clicked */}
// todo: instead of using `console.log` need some debug method that unpacks objects and displays strings

function App() {

  // help: [ https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks ] - actual example of how to use new react features
  const [gridCols, setGridCols] = useState(3);

  console.log("gridCols: " + gridCols)

  let cardsNumber = 7
  let defaultCols = 3

  let cards = []
  for(let i=0; i<cardsNumber; i++) {
    // IMPORTANT: need the raw data instead of <Card /> rendering to be prop-drilled
    let card = {
      key: i, 
      title: "Something " + i, 
      image: logo, 
      url: "", 
      text: "Randomized text" + i, 
      tags: ""
    }
    cards.push(card) 
    // console.log(card)
    // console.log(JSON.stringify(card, null, 2)) 
  }
  console.log("App " + cards) // note: why does this display twice
  console.log("App: " + JSON.stringify(cards, null, 2))

  return (
    <div className="App">
      <header className="App-header">
      {/* help: [ https://reactjs.org/docs/forms.html ] */}
      
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      
        <div>
          {/* help: [ https://stackoverflow.com/questions/39297616/how-to-left-align-the-label-in-a-button ] */}
          <div style={{textAlign: "left"}}>
            <label>
              Grid width in items:
            </label>
              {/* help: [ https://stackoverflow.com/questions/72630306/how-to-set-up-default-value-if-props-is-empty-using-reactjs ] - if putting input 0, then app breaks */}
            <input type="text" name="gridCols" onChange={(e) => e.target.value > 0 ? setGridCols(e.target.value) : defaultCols}/>
          </div>
          <div>
            <Grid cols={gridCols} items={cards}></Grid>
          </div>
        </div>  
      </header>
    </div>
  );
}

export default App;
