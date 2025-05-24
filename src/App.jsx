import { useReducer } from "react";
import "./App.css";
import AddTask from "./Componentes/AddTask";
import TaskList from "./Componentes/TaskList";
import taskReducer from "./Reducers/taskReducer";
import { initialTasks } from "./data/task";
/*   
1.Learn Reducer how to work and  how to  comabained to useSate to userRecuder 
2.Learn how to use dispatch what is dispatch and learn swtich case useses


*/

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  //handle

  const getNextId = (data) => {
    const maxId = data.reduce(
      (prev, current) => (prev.id > current.id ? prev.id : current.id),
      0
    );
    return maxId + 1;
  };

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text,
      id: getNextId(tasks),
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
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
