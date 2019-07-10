import React, { Component } from 'react';
import KanbanList from "./KanbanList";
import {connect} from "react-redux"
//import { listenerCount } from 'cluster';


class App extends Component{
  render (){ 
    const {lists} = this.props;
  return (
    <div className="App">
     <h2>Hello World</h2>
     {lists.map(list =>
  <KanbanList title ={list.title} cards ={list.cards}/>
   )}
    </div>
  );
}
}

const mapStateToProps = state =>({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
