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
  changeTaskStatus: (taskId: string, isDone: boolean) => void;
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

  const onActiveClickHandler = () => props.changeFilter("active");
  const onAllClickHandler = () => props.changeFilter("all");
  const onCompletedClickHandler = () => props.changeFilter("completed");

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
        {props.tasks.map((t) => {
          const onRemoveHandler = () => {
            props.removeTask(t.id);
          };
          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(t.id, e.currentTarget.checked);
          };
          return (
            <li key={t.id}>
              <input
                type="checkbox"
                checked={t.isDone}
                onChange={onChangeHandler}
              />
              <span>{t.title}</span>
              <button onClick={onRemoveHandler}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onCompletedClickHandler}>Complete</button>
      </div>
    </div>
  );
}
