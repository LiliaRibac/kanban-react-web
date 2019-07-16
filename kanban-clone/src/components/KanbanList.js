import React from "react";
import KanbanCard from "./KanbanCard";
import KanbanActionButton from "./KanbanActionButton"
//import { height } from "@material-ui/system";




const KanbanList = ({title ,cards, listID}) =>{
    console.log(cards)
    return (
    <div style={styles.container}> 
        <h4>{title}</h4>
       {cards.map(card =>(
            <KanbanCard key={card.id} text = {card.text} />
            ))} 
    <KanbanActionButton listID={listID}  />    

    </div>
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