const Storage = (() => {
  const init = () => {
    if (localStorage.length == 0) {
      localStorage.setItem("projects", JSON.stringify([]));
    }
  };

  const saveProject = (project) => {
    let projectsList = JSON.parse(localStorage.getItem("projects"));
    if (!projectsList.includes(project.name)) {
      projectsList.push(project.name);
      localStorage.setItem("projects", JSON.stringify(projectsList));
      localStorage.setItem(project.name, JSON.stringify(project));
    }
  };

  const saveTask = (project, task) => {
    const saved_project = JSON.parse(localStorage.getItem(project.name));
    const task_exists = saved_project.tasks.find((t) => t.title == task.title);

    if (!task_exists) {
      saved_project.tasks.push(task);
      localStorage.setItem(project.name, JSON.stringify(saved_project));
    } else {
      const index = saved_project.tasks.findIndex((t) => t.title == task.title);
      saved_project.tasks.splice(index, 1, task);
      localStorage.setItem(project.name, JSON.stringify(saved_project));
    }
  };

  const removeProject = (project) => {
    let projectsList = JSON.parse(localStorage.getItem("projects"));
  };

  return {
    init,
    saveProject,
    saveTask,
  };
})();

export default Storage;
