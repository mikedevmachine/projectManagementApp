export default function ProjectEdit({ project }) {
  return (
    <>
      <div className="w-[35rem] mt-16">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">
          {project.title}
        </h1>
        <menu className="flex items-center justify-end gap-4 my-1">
          <button className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </menu>
        <p className="text-stone-400 mb-4"> {project.date} </p>

        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
          <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
          <button className="text-stone-600 hover:text-stone-950 mx-2">
            Add task
          </button>
          <li className="flex justify-between my-4">
            <ul className="p-4 mt-8 rounded-md bg-stone-200">Task1 Task2</ul>
          </li>
        </div>
      </div>
    </>
  );
}
