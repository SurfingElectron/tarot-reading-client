import React from 'react';
import './App.css';

// Components
import Button from '../Button';
import CardContainer from '../CardContainer';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    //Can fetch "home" because of proxy specified in package.json
    fetch("/home") 
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="app">
      <h1>Tarot Readings</h1>
      <Button text="GENERATE READING" />
        <div className="reading">
          <CardContainer />
        </div>
    </div>
  );
}
export default App;

/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
*/