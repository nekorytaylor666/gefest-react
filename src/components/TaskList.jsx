import React from "react";
import TaskItem from "./TaskItem";

function TaskList(props) {
  console.log("TaskList Props: ", props);
  if (props.tasks === undefined || props.tasks.length === 0) {
    return <h2 className="text-white">Задачи отсутствуют</h2>;
  }
  return (
    <div className="flex flex-col gap-4">
      {props.tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDeleteTask={props.onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
