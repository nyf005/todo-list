const initializeTodo = (DOM, projects, tasks) => {
  const projectBtns = DOM.getProjectsBtns();

  // Set default Selected Project
  DOM.setActiveProject(projectBtns[0]);

  // Load all tasks related to default project
  tasks.forEach((task) => {
    if (task.projectName == "Index") {
      // Add click event to individual tasks
      let taskCard = DOM.createTaskCard(task);

      taskCard.addEventListener("click", () => {
        DOM.setActiveTask(taskCard);
        DOM.showTaskDetails(task);
      });
    }
  });

  // Load all projects
  projects.forEach((project) => {
    DOM.createProjectButton(project);
  });
};

export default initializeTodo;
