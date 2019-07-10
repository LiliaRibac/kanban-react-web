import React from "react";
import Icon from '@material-ui/core/Icon';
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';

class KanbanActionButton extends React.Component{

    state ={
        formOpen: false,
        text : ""
    }
 openForm = () =>{
     this.setState({
         formOpen:true
     })
 }
 closeForm = e => {
     this.setState ({
         formOpen:false
     })
 }

 handleInputChange = e =>{
this.setState ({
    text:e.target.value
})
 }

renderAddButton = () =>{
    const {list} = this.props;

    const buttonText = list ? "Add another list" : "Add another card";
    const btnTextOpacity = list ? 1 : 0.5;
    const btnTextColor = list ? "white" : "inherit";
    const btnTextBackground = list ? "rgba  (0,0,0,.15)" :"inherit";

    return (
        <div 
        onClick ={this.openForm}
        style ={{
            ...styles.openBtn,
            opacity:btnTextOpacity,
            color:btnTextColor,
            backgroundColor:btnTextBackground
        }}>
            <Icon>add</Icon>
           
        </div>
    )
    }

    renderForm = () =>{

        const {list} = this.props;
        const placeholder = list ? "Enter list title..." :
        "Enter a title for this card...";
        const btnTitle = list ? "Add List" : "Add Card"

        return ( 
        <div>
            <Card 
            style ={{
                minHeight:80,
                minWidth:27,
                padding:"6px 8px 2px"
            }}
            >
                <Textarea placeholder ={placeholder} autoFocus
                onBlur ={this.closeForm}
                value={this.state.text}
                onChange = {this.handleInputChange}
                style ={{
                    resize : "none",
                    width: "100%",
                    outline:"none",
                    border:"none",
                    overflow:"hidden",
                }}
                />
            </Card>
        </div>
        )}

    render(){
        return  this.state.formOpen ? this.renderForm() : this.renderAddButton();
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