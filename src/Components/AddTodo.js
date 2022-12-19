import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";


function AddTodo(props) {
    let inp;
    function onSubmit(e) {
        e.preventDefault();
        if(!inp.value.trim()){
            alert('input text');
            return
        } 
        props.dispatch(addTodo(inp.value)) ;
        inp.value = '';
    }
   
    return (
        <div className="add">
             <form onSubmit={onSubmit}>
                <span>text:</span>
                <input type='text' ref={(ref) => inp = ref }/>
                <button type="submit" >AddTodo</button>
            </form>
        </div>
       
    )
}

export default connect()(AddTodo);