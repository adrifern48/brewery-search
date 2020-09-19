import React from 'react';
import './App.css';
import MainContainer from "./components/MainContainer";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MainContainer />
      </header>
    </div>
  );
}

export default App;
