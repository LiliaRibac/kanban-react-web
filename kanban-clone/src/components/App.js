import React, { Component } from 'react';
import KanbanList from "./KanbanList";
import {connect} from "react-redux";
import KanbanActionButton from "./KanbanActionButton"


class App extends Component{
  render (){ 
    const {lists} = this.props;
  return (
    <div >
     <h2>Hello World</h2>
     <div style ={styles.listsContainer}>
     {lists.map(list =>( 
  <KanbanList listID = {list.id} key={list.id} title ={list.title} cards ={list.cards}/>
   ))}
   <KanbanActionButton list/>
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
