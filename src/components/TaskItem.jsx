import React from "react";

function TaskItem(props) {
  return (
    <div className="flex gap-4 items-center">
      <h2 className="text-2xl font-mono text-white">
        Задача {props.task.title}
      </h2>
      <button
        onClick={() => props.onDeleteTask(props.task.id)}
        type="button"
        className="border text-white rounded-lg py-2 px-4 font-semibold"
      >
        X
      </button>
    </div>
  );
}

export default TaskItem;
