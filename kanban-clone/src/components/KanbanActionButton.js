import React from "react";
import Icon from '@material-ui/core/Icon';

class KanbanActionButton extends React.Component{

renderAddButton = () =>{
    const {list} = this.props;

    const buttonText = list ? "Add another list" : "Add another card";
    const btnTextOpacity = list ? 1 : 0.5;
    const btnTextColor = list ? "white" : "inherit";
    const btnTextBackground = list ? "rgba  (0,0,0,.15)" :"inherit";

    return (
        <div style ={{
            ...styles.openBtn,
            opacity:btnTextOpacity,
            color:btnTextColor,
            backgroundColor:btnTextColor
        }}>
            <Icon>add</Icon>
            <p>{buttonText}</p>
        </div>
    )
    }

    render(){
        return this.renderAddButton();
    }
}

const styles ={
    openBtn:{
        display:"flex",
        alignItems:"center",
        cursor:"pointer",
        borderRadius:3,
        height:35,
        width:270,
        paddingLeft:10
    }
}

export default KanbanActionButton;