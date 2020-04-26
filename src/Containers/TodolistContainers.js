import { connect } from "react-redux";
import TodoList from "../Components/TodoList";

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = () => {
  return {};
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
