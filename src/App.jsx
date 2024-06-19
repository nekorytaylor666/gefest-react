import React from "react";

function App() {
  const defaultTasks = [
    { title: "Купить хлеб", id: 1 },
    { title: "Помыть кота", id: 2 },
    { title: "Погладить кота", id: 3 },
    { title: "Покормить кота", id: 4 },
    { title: "Поиграть с котом", id: 5 },
  ];

  // const [читать, записывать] = React.useState(начальноеЗначение)
  // читать - переменная, в которой хранится текущее значение. ее нельзя изменять напрямую
  // записывать - функция, которая позволяет изменить значение переменной читать.
  const [inputValue, setInputValue] = React.useState("Значение изменилось");
  const [tasks, setTasks] = React.useState(defaultTasks);

  const onAddTask = () => {
    console.log("Добавить задачу");
    const newTask = { title: inputValue, id: tasks.length + 1 };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const onInputChange = (event) => {
    console.log("Изменение инпута", event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onAddTask();
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen bg-black w-full">
      <h1 className="text-4xl font-mono text-orange-500">Ежедневник</h1>

      <form onSubmit={onSubmit} className="flex gap-4">
        <input
          onChange={onInputChange}
          value={inputValue}
          className="bg-zinc-800 w-96 rounded-lg px-4 py-2 text-white"
          type="text"
        ></input>
        <button
          type="submit"
          className="bg-orange-500 text-white rounded-lg py-2 px-4 font-semibold"
        >
          Добавить задачу
        </button>
      </form>
      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <div key={task.id}>
            <h2 className="text-2xl font-mono text-white">
              Задача {task.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
