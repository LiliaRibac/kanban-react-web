import React from "react";
import KanbanCard from "./KanbanCard"



const KanbanList = ({title ,cards}) =>{
    return (
    <div style={styles.container}> 
        <h4>{title}</h4>
       {cards.map(card =>(
            <KanbanCard text = {card.text} />
            ))} 
    </div>
    )
}

const styles ={
    container:{
backgroundColor :"#ccc",
borderRadius:3,
width:200, 
padding:8,
// marginLeft:46
    }
}
export default KanbanList;