import React, { Component } from 'react';
import KanbanList from "./KanbanList";
import {connect} from "react-redux";
import KanbanActionButton from "./KanbanActionButton";
import {DragDropContext} from "react-beautiful-dnd";


class App extends Component{
  onDragEnd =()=> {
    //ToDO :reordering logic 
  }
  render (){ 
    const {lists} = this.props;
  return (
    <DragDropContext onDragEnd={this.onDragEndnpm }>
    <div >
     <h2>Hello World</h2>
     <div style ={styles.listsContainer}>
     {lists.map(list =>( 
  <KanbanList listID = {list.id} key={list.id} title ={list.title} cards ={list.cards}/>
   ))}
   <KanbanActionButton list/>
    </div>
    </div>
    </DragDropContext>
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
