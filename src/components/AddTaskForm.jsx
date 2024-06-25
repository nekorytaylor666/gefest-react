import React from "react";

function AddTaskForm(props) {
  const [inputValue, setInputValue] = React.useState("");

  const onInputChange = (event) => {
    console.log("Изменение инпута", event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onAddTask(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-4">
      <input
        onChange={onInputChange}
        value={inputValue}
        className="bg-zinc-800 w-96 rounded-lg px-4 py-2 text-white"
        type="text"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white rounded-lg py-2 px-4 font-semibold"
      >
        Добавить задачу
      </button>
    </form>
  );
}

export default AddTaskForm;
