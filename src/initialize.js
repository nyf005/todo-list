import DomUI from "./modules/dom_ui";

const initializeTodo = (projectList) => {
  const DOM = DomUI();
  const projectBtns = DOM.getProjectsBtns();
  // Set default Selected Project
  DOM.setActiveProject(projectBtns[0]);

  const defaultProject = projectList
    .getAll()
    .find((project) => project.getProjectName() == "Inbox");

  if (defaultProject) {
    // Load all tasks related to default project
    DOM.showTaskCards(defaultProject);
  }

  DOM.createAddProjectButton();
  DOM.setProjectsBtns(projectList);
  DOM.displayTaskForm(projectList.getAll());

  // Load all projects
  projectList.getAll().forEach((project) => {
    if (project.getProjectName() != "Inbox") {
      DOM.createProjectButton(project);
    }
  });
};

export default initializeTodo;
