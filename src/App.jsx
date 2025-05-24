import { useState } from "react";

import "./App.css";
import AddTask from "./Componentes/AddTask";
import TaskList from "./Componentes/TaskList";

import { initialTasks } from "./data/task";

/*   
1.Learn Reducer how to work and  how to  comabained to useSate to userRecuder 



*/

export default function App() {
  const [tasks, setTask] = useState(initialTasks);

  //handle

  const getNextId = (data) => {
    const maxId = data.reduce(
      (prev, current) => (prev.id > current.id ? prev.id : current.id),
      0
    );
    return maxId + 1;
  };

  const handleAddTask = (text) => {
    setTask([
      ...tasks,
      {
        id: getNextId(tasks),

        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    const nextTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });

    setTask(nextTasks);
  };

  const handleDeleTask = (taskId) => {
    setTask(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleAddTask} />

      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeletedTask={handleDeleTask}
      />
    </>
  );
}
