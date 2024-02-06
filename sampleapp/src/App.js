import './App.css';

import React from 'react';

import nithyauicontrols from 'nithyauicontrols';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {nithyauicontrols.Greetings('Nithya')}
        </p>
      </header>
    </div>
  );
}

export default App;
