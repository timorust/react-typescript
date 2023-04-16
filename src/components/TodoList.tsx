import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValueTypes } from "../App";

export type TasksType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TasksType>;
  removeTask: (id: string) => void;
  changeFilter: (value: FilterValueTypes) => void;
  addTask: (inputTaskTitleFromTodoList: string) => void;
};

export function TodoList(props: PropsType) {
  const [inputTaskTitleFromTodoList, setInputTaskTitleFromTodoList] =
    useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTaskTitleFromTodoList(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      props.addTask(inputTaskTitleFromTodoList);
      setInputTaskTitleFromTodoList("");
    }
  };

  const addTask = () => {
    props.addTask(inputTaskTitleFromTodoList);
    setInputTaskTitleFromTodoList("");
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        <input
          value={inputTaskTitleFromTodoList}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {props.tasks.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.isDone} />
            <span>{t.title}</span>
            <button
              onClick={() => {
                props.removeTask(t.id);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => props.changeFilter("active")}>Active</button>
        <button onClick={() => props.changeFilter("all")}>All</button>
        <button onClick={() => props.changeFilter("completed")}>
          Complete
        </button>
      </div>
    </div>
  );
}
