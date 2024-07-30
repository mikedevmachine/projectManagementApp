import logo from "./assets/no-projects.png";

export default function ProjectSelect({ onClick }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={logo}
        alt="notes"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>

      <button
        className="px-6 py-2 rounded-md mt-4 bg-stone-800 text-stone-200 hover:bg-stone-950"
        onClick={onClick}
      >
        Create a new project
      </button>
    </div>
  );
}
