import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = ({ addTask }) => {
  const [text, setText] = useState("");

  const updateText = e => setText(e.target.value);

  const onClickAdd = () => {
    addTask(text);
    setText("");
  };

  return (
    <div>
      <input
        type={"text"}
        value={text}
        onChange={updateText}
        placeholder="Add new task!"
      />
      <button onClick={onClickAdd}>Add Task</button>
    </div>
  );
};

AddTodo.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default AddTodo;
