import React from "react";
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
};

export function TodoList(props: PropsType) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        <input type="text" />
        <button>+</button>
      </div>

      <ul>
        {props.tasks.map((t) => (
          <li>
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
