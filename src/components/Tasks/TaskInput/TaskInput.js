import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [inputText, setinputText] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      // установка дефолтных стилей по умолчанию
      setIsInputValid(true);
    }
    setinputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (inputText.trim().length === 0) {
      // проверяю корректность ввода
      setIsInputValid(false);
      return;
    }
    props.onAddTask(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isInputValid ? "red" : "black" }}>Задачи</label>
        <input
          style={{
            borderColor: !isInputValid ? "red" : "black", // добавляем инлайн стили при некорректном вводе
            background: !isInputValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={taskInputChangeHandler}
        />
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
