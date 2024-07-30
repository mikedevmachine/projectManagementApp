import { useRef, useState } from "react";

export default function ProjectAdd({ onCancel, onSave }) {
  const project = useRef({
    title: "",
    description: "No description for this project.... sorry",
    date: formatDate(new Date()),
    tasks: [],
  });

  function formatDate(date) {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  function handleTitle(event) {
    project.current.title = event.target.value;
  }
  function handleDescription(event) {
    project.current.description = event.target.value;
  }
  function handleDate(event) {
    project.current.date = event.target.value;
  }
  function handleSave() {
    if (project.current.title.length > 3) {
      onSave(project.current);
    }
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          className="text-stone-500 hover:text-stone-950"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleSave}
        >
          Save
        </button>
      </menu>

      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          TITLE
          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            required
            type="text"
            onChange={handleTitle}
          />
        </label>
      </p>

      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          DESCRIPTION
          <textarea
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            rows="3"
            required
            onChange={handleDescription}
          ></textarea>
        </label>
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          DUE DATE
          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="date"
            min="2024-01-01"
            max="2025-12-31"
            onChange={handleDate}
          />
        </label>
      </p>
    </div>
  );
}
