import React from "react";
import KanbanCard from "./KanbanCard";
import KanbanActionButton from "./KanbanActionButton"
import {Droppable} from "react-beautiful-dnd";
import styled from "styled-components";



const ListContainer= styled.div `
background-color :#dfe3e6;
border-radius:3px;
width:200px; 
padding:8px;
margin-right:8px;
height:100%;
`
const KanbanList = ({title,cards, listID}) =>{
    console.log(cards)
    return (
        <Droppable droppableId={String(listID)}>
    {(provided)=>(
        <ListContainer {...provided.droppableProps} ref={provided.innerRef} > 
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

    </ListContainer>
    )}
    </Droppable>
    )
}

export default KanbanList;