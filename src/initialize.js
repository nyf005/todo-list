import DomUI from "./dom_ui";

const initializeDOM = (projectList) => {
  const projectBtns = DomUI.getProjectsBtns();
  // Set default Selected Project
  DomUI.setActiveProject(projectBtns[0]);

  const defaultProject = projectList
    .getAll()
    .find((project) => project.getProjectName() == "Inbox");

  if (defaultProject) {
    // Load all tasks related to default project
    DomUI.showTaskCards(defaultProject);
  }

  DomUI.createAddProjectButton();
  DomUI.setProjectsBtns(projectList);
  DomUI.displayTaskForm(projectList.getAll());

  // Load all projects
  projectList.getAll().forEach((project) => {
    if (project.getProjectName() != "Inbox") {
      DomUI.createProjectButton(project);
    }
  });
};

export default initializeDOM;
