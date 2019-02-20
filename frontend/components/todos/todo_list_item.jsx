import React from 'react';

class TodoListItem extends React.Component{
    render(){
        return (
            <ul>
                {this.props.todo.id}
                <li>{this.props.todo.title} </li>
                <li>{this.props.todo.body}</li>
                <li>{this.props.todo.done.toString()}</li>
            </ul>
        )
    }
}

export default TodoListItem;