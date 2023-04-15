import { useState } from "react";
import "./App.css";
import { TodoList, TasksType } from "./components/TodoList";
import { v1 } from "uuid";

export type FilterValueTypes = "all" | "active" | "completed";
function App() {
  let [tasks, setTasks] = useState<Array<TasksType>>([
    { id: v1(), title: "Networking", isDone: true },
    { id: v1(), title: "Linux", isDone: false },
    { id: v1(), title: "Windows", isDone: true },
    { id: v1(), title: "TCP UDP", isDone: true },
  ]);

  console.log(tasks);

  let [filter, setFilter] = useState<FilterValueTypes>("all");

  function changeFilter(value: FilterValueTypes) {
    setFilter(value);
  }

  let tasksToFilter = tasks;
  if (filter === "active") {
    tasksToFilter = tasks.filter((t) => t.isDone === false);
  }
  if (filter === "completed") {
    tasksToFilter = tasks.filter((t) => t.isDone === true);
  }

  function addTask(inputTaskTitleFromTodoList: string) {
    let newTask = {
      id: v1(),
      title: inputTaskTitleFromTodoList,
      isDone: false,
    };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function removeTask(id: string) {
    let filterTasks = tasks.filter((t) => t.id !== id);
    setTasks(filterTasks);
  }

  return (
    <div className="App">
      <TodoList
        title="Cyber"
        tasks={tasksToFilter}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
      />
    </div>
  );
}

export default App;
