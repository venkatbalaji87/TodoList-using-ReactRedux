import { connect } from "react-redux";
import AddTodo from "../Components/AddTodo";
import { addTodo } from "../redux/actions/actions";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: text => {
      dispatch(addTodo(text));
    }
  };
};

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;
