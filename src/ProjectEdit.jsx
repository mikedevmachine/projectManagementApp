import { useRef, useState } from "react";

export default function ProjectEdit({ project, onDelete, onClear }) {
  const taskRef = useRef("");
  const [tasks, setTasks] = useState([]);

  function handleTask(event) {
    if (event) {
      taskRef.current = event.target.value;
    }
  }

  function addTask() {
    const newTask = taskRef.current;
    if (newTask.trim().length > 3) {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      project.tasks = updatedTasks;
      taskRef.current = "";
      document.getElementById("taskInput").value = "";
    }
  }

  function clearTask(indexToRemove) {
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updatedTasks);
    project.tasks = updatedTasks;
  }
  return (
    <>
      <div className="w-[35rem] mt-16">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">
          {project.title}
        </h1>
        <menu className="flex items-center justify-end gap-4 my-1">
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </menu>
        <p className="text-stone-400 mb-4"> {project.date} </p>

        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
          <input
            id="taskInput"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            onChange={handleTask}
          />
          <button
            className="text-stone-600 hover:text-stone-950 mx-2"
            onClick={addTask}
          >
            Add task
          </button>

          {tasks.length > 0 && (
            <ul className="p-4 mt-8 rounded-md bg-stone-200">
              {tasks.map((task, index) => (
                <li key={index} className="flex justify-between my-4">
                  {task}
                  <button
                    onClick={() => clearTask(index)}
                    className="text-stone-700 hover:text-red-500"
                  >
                    Clear
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
