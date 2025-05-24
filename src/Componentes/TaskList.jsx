import Task from "./Task";

const TaskList = ({ tasks, onChangeTask, onDeletedTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          onChangeTask={onChangeTask}
          onDeletedTask={onDeletedTask}
          key={task.id}
          task={task}
        />
      ))}
    </ul>
  );
};

export default TaskList;
