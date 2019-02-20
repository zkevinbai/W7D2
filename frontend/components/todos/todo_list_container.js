import {connect} from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';

const mapStatetoProps = state => ({
    todos: allTodos(state)
});

const mapDispatchtoProps = dispatch => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

const TodoListContainer = connect(mapStatetoProps, mapDispatchtoProps)(TodoList);

export default TodoListContainer;