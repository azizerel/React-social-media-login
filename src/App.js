import React                              from 'react';
import                                         './App.css';
import LeftPanel                          from './panels/leftPanel.js'
import RightPanel                         from './panels/rightPanel.js'


class App extends React.Component {

  render() {
    return (
      <div className="App">
          <div className="appBody div-center">
            <LeftPanel />
            <RightPanel />
          </div>
      </div>
    );
  }
}

export default App;
