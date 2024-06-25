import React, { useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import { SkeletonTaskItem } from "./components/SkeletonTaskItem";
import TaskList from "./components/TaskList";

let rerenderCount = 0;
function App() {
  // Локальное состояние
  // const [читать, записывать] = React.useState(начальноеЗначение)
  // читать - переменная, в которой хранится текущее значение. ее нельзя изменять напрямую
  // записывать - функция, которая позволяет изменить значение переменной читать.
  // const [tasks, setTasks] = React.useState(defaultTasks);
  const [tasks, setTasks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchTasks = () => {
    setIsLoading(true);

    fetch("http://localhost:3000/todo").then((response) =>
      response.json().then((data) => {
        setTasks(data.todos);
        setIsLoading(false);
      })
    );
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetchTasks();
  }, []);

  console.log("I rerendered: ", rerenderCount++);

  const onAddTask = async (taskValue) => {
    console.log("Добавить задачу", taskValue);
    const newTask = { todo: { title: taskValue, id: tasks.length + 1 } };
    await fetch("http://localhost:3000/new-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    fetchTasks();
  };

  const onDeleteTask = (id) => {
    console.log("Удалить задачу", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen bg-black w-full">
      <h1 className="text-4xl font-mono text-orange-500">Ежедневник</h1>
      <AddTaskForm onAddTask={onAddTask} />
      <div className="h-[700px] w-[500px]">
        {isLoading ? (
          <div className="flex flex-col gap-4">
            <SkeletonTaskItem />
            <SkeletonTaskItem />
            <SkeletonTaskItem />
            <SkeletonTaskItem />
            <SkeletonTaskItem />
            <SkeletonTaskItem />
            <SkeletonTaskItem />
            <SkeletonTaskItem />
            <SkeletonTaskItem />
          </div>
        ) : (
          <TaskList tasks={tasks} onDeleteTask={onDeleteTask} />
        )}
      </div>
    </div>
  );
}

export default App;
