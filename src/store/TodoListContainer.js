import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from './todosSlice';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = { toggleTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);