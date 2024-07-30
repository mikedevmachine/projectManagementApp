import ProjectAdd from "./ProjectAdd";
import SideBar from "./SideBar";
import ProjectSelect from "./ProjectSelect";
import ProjectEdit from "./ProjectEdit";
import { useState } from "react";

function App() {
  const [projectAdded, setProjectAdded] = useState(false);
  const [saved, setSaved] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleSaveProject(newProject) {
    setProjects([...projects, newProject]);
    handleSave();
  }
  function handleAddProject() {
    setSelected(false);
    setProjectAdded(true);
  }
  function handleResetProject() {
    setProjectAdded(false);
  }
  function handleSave() {
    setSaved(true);
    setProjectAdded(false);
    setSaved(false);
  }

  function handleSelectProject(index) {
    console.log(index);
    setSelectedProject(index);
    setSelected(true);
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          onClick={handleAddProject}
          projects={projects}
          onSelect={handleSelectProject}
        />

        {selected && selectedProject !== null ? (
          <ProjectEdit project={projects[selectedProject]} />
        ) : saved ? (
          <ProjectSelect onClick={handleAddProject} />
        ) : projectAdded ? (
          <ProjectAdd
            onCancel={handleResetProject}
            onSave={handleSaveProject}
          />
        ) : (
          <ProjectSelect onClick={handleAddProject} />
        )}
      </main>
    </>
  );
}

export default App;
