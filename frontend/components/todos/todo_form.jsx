import React from 'react';

function uniqueId() {
    return new Date().getTime();
}

class TodoForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            id: uniqueId(),
            title: "",
            body: "",
            done: false,
        };
    }

    handleChange(event, type){
        // debugger
        this.setState(
            {[type]: event.target.value}
        ); 
    }

    handleClick(event){
        // debugger
        if (this.state.done){
            this.setState(
                {done: false}
            ); 
        }
        else {
            this.setState(
                {done: true}
            ); 
        }
    }

    createTodo(event){
        event.preventDefault();
        this.state.id = uniqueId(),
        // debugger
        this.props.receiveTodo(this.state);
    }

    render(){
        // debugger
        return (
        <form onSubmit={ (e) => this.createTodo(e) } >
            <label>Todo
                <input type="text" onChange={ (e) => this.handleChange(e, "title") }></input>
            </label>
            <br></br>
            <label>Details
                <input type="text" onChange={(e) => this.handleChange(e, "body")}></input>
            </label>
            <br></br>
            <label>Completed
                <input type="checkbox" 
                    checked={this.state.done}
                    onChange={(e) => this.handleClick(e)} 
                    ></input>
            </label>
            <br></br>

            <input type="submit"></input>
        </form>
        )
    }
}

export default TodoForm;