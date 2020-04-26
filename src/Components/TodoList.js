import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, todoIndex) => {
          return (
            <li
              key={todoIndex}
              style={{
                textDecorationLine: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  )
};

export default TodoList;
