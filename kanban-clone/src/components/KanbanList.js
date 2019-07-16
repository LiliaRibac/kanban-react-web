import React from "react";
import KanbanCard from "./KanbanCard";
import KanbanActionButton from "./KanbanActionButton"
import {Droppable} from "react-beautiful-dnd";




const KanbanList = ({title ,cards, listID}) =>{
    console.log(cards)
    return (
        <Droppable droppableId={String(listID)}>
    {(provided)=>(
        <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}> 
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
    )
}

const styles ={
    container:{
backgroundColor :"#dfe3e6",
borderRadius:3,
width:200, 
padding:8,
marginRight:8,
height:"100%"
    }
}
export default KanbanList;