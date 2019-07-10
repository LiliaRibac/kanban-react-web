import React from "react";
import KanbanCard from "./KanbanCard";
import KanbanActionButton from "./KanbanActionButton"



const KanbanList = ({title ,cards}) =>{
    return (
    <div style={styles.container}> 
        <h4>{title}</h4>
       {cards.map(card =>(
            <KanbanCard key={card.id} text = {card.text} />
            ))} 
    <KanbanActionButton />

    </div>
    )
}

const styles ={
    container:{
backgroundColor :"#dfe3e6",
borderRadius:3,
width:200, 
padding:8,
marginRight:8
// marginLeft:46
    }
}
export default KanbanList;