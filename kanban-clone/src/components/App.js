import React, { Component } from 'react';
import KanbanList from "./KanbanList"


class App extends Component{
  render (){ 
  return (
    <div className="App">
     <h2>Hello World</h2>
     <KanbanList/>
    </div>
  );
}
}

export default App;
