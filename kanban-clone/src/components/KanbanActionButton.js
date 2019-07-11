import React from "react";
import Icon from '@material-ui/core/Icon';
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import  Button  from "@material-ui/core/Button";
import {connect} from "react-redux";
import {addList} from "../actions"

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

handleAddList =() => {
  const {dispatch} = this.props;
  const {text} = this.state;
  if (text){
      dispatch(addList(text));
  } 
  return
}


renderAddButton = () =>{
    const {list} = this.props;

    const buttonText = list ? "Add another list" : "Add another card";
    const btnTextOpacity = list ? 1 : 0.5;
    const btnTextColor = list ? "black" : "inherit";
    const btnTextBackground = list ? "rgba(0,0,0,.15)" :"inherit";

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
           <p>{buttonText}</p>
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
                <Textarea placeholder ={placeholder} 
                autoFocus
                onBlur ={this.closeForm}
                value={this.state.text}
                onChange = {this.handleInputChange}
                style ={{
                    resize : "none",
                    width: "100%",
                    outline:"none",
                    border:"none",
                    overflow:"hidden"
                }}
                />
            </Card>

                <div style={styles.formBtn}> 
                    <Button
                    onMouseDown ={this.handle}
                    variant ="contained"
                    style ={{color:"white", backgroundColor:"#5aac44"}}
                    >
                        {btnTitle}{""}
                   </Button>
                    <Icon style ={{marginLeft:8, cursor:"pointer"}}>close</Icon>
                </div>
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
        width:200,
        paddingLeft:10
    },
formBtn: {
    marginTop:8,
    display:"flex",
    alignItems:"center"
    
}

}

export default  connect() (KanbanActionButton);