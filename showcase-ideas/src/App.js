import logo from './logo.svg';
import './App.css';

import Card from './Card.js'; // help: [ https://bobbyhadz.com/blog/react-element-type-is-invalid-expected-string-but-got ] - use plain import for Class, use `{}` import for functions

// help: [ https://react-bootstrap.github.io/components/cards/ ] - this is one the ways to present this idea, like `Magic the Gathering` cards
// help: [ https://create-react-app.dev/docs/adding-custom-environment-variables ] - perhaps use environment variables to define behaviour of application - like path to folder containing ideas

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
        <Card />
      </header>
    </div>
  );
}

export default App;
