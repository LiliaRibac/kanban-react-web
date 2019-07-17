import React from "react";
import KanbanCard from "./KanbanCard";
import KanbanActionButton from "./KanbanActionButton"
import {Droppable,Draggable} from "react-beautiful-dnd";
import styled from "styled-components";



const ListContainer= styled.div `
background-color :#dfe3e6;
border-radius:3px;
width:200px; 
padding:8px;
margin-right:8px;
height:100%;
`
const KanbanList = ({title,cards, listID, index}) =>{
    console.log(cards)
    return (
        <Draggable draggableId = {String(listID)} index={index}>
            {provided => (
                <ListContainer {...provided.draggableProps} 
                ref={provided.innerRef} 
                {...provided.dragHandleProps}>  
                <Droppable droppableId={String(listID)}>
                {(provided)=>(
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                    <h4>{title}</h4>
                   {cards.map((card , index) =>(
                        <KanbanCard 
                        key={card.id} 
                        index={index}
                         text = {card.text} 
                         id ={card.id} />
                        ))} 
                <KanbanActionButton listID={listID}  />  
                {provided.placeholder}
                </div>
               
                )}
                </Droppable>
                </ListContainer>
            )}
        </Draggable>
        
    )
}

export default KanbanList;