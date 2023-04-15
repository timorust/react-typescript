import React, { useState } from "react";
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

  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        <input
          value={inputTaskTitleFromTodoList}
          onChange={(e) => setInputTaskTitleFromTodoList(e.currentTarget.value)}
          onKeyPress={(e) => {
            if (e.charCode === 13) {
              props.addTask(inputTaskTitleFromTodoList);
              setInputTaskTitleFromTodoList("");
            }
          }}
        />
        <button
          onClick={() => {
            props.addTask(inputTaskTitleFromTodoList);
            setInputTaskTitleFromTodoList("");
          }}
        >
          Add Task
        </button>
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
