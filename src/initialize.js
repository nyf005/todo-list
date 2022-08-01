import DomUI from "./modules/dom_ui";

const initializeTodo = (projectList) => {
  const DOM = DomUI();
  const projectBtns = DOM.getProjectsBtns();
  // Set default Selected Project
  DOM.setActiveProject(projectBtns[0]);

  const defaultProjects = projectList
    .getAll()
    .find((project) => project.name == "Inbox");

  if (defaultProjects) {
    // Load all tasks related to default project
    defaultProjects.tasks.forEach((task) => {
      // Add click event to individual tasks
      DOM.createTaskCard(task);
    });
  }

  DOM.createAddProjectButton();
  DOM.setProjectsBtns(projectList);
  DOM.displayTaskForm(projectList.getAll());

  // Load all projects
  projectList.getAll().forEach((project) => {
    if (
      project.name != "Inbox" ||
      project.name != "Today" ||
      project.name != "Upcoming"
    ) {
      DOM.createProjectButton(project);
    }
  });
};

export default initializeTodo;
