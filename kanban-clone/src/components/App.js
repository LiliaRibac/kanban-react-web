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
     <div style ={styles.listsContainer}>
     {lists.map(list =>( 
  <KanbanList key={list.id} title ={list.title} cards ={list.cards}/>
   ))}
    </div>
    </div>
   );
  }
}

const styles ={
  listsContainer:{
    display: "flex",
    flexDirection:"row"
  }
}
const mapStateToProps = state =>({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
