import React, { Component } from 'react';
import KanbanList from "./KanbanList";
import {connect} from "react-redux";
import KanbanActionButton from "./KanbanActionButton";
import {DragDropContext} from "react-beautiful-dnd";
import {sort} from '../actions';
import styled from "styled-components"


const ListContainer = styled.div ` 
    display: flex;
    flex-direction: row ;
`
class App extends Component{
  onDragEnd =(result)=> {
    const {destination, source,draggableId} = result;

    if (!destination){
      return;
    }
   
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId

      )
    );

  }
  render (){ 
    const {lists} = this.props;
  return (
    <DragDropContext onDragEnd={this.onDragEndnpm }>
    <div >
     <h2>Hello World</h2>
     <ListContainer>
     {lists.map(list =>( 
  <KanbanList listID = {list.id} key={list.id} title ={list.title} cards ={list.cards}/>
   ))}
   <KanbanActionButton list/>
   </ListContainer>
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
