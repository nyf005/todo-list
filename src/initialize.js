import DomUI from "./dom_ui";

const initializeDOM = (projectsList) => {
  const projectBtns = DomUI.getProjectsBtns();
  // Set default Selected Project
  DomUI.setActiveProject(projectBtns[0]);

  const defaultProject = projectsList
    .getAll()
    .find((project) => project.getProjectName() == "Inbox");

  if (defaultProject) {
    // Load all tasks related to default project
    DomUI.showTaskCards(defaultProject);
  }

  DomUI.createAddProjectButton();
  DomUI.setProjectsBtns(projectsList);
  // We add the projectsList as array to populate the select input in the task form
  DomUI.displayTaskForm(projectsList.getAll());

  // Load all projects
  projectsList.getAll().forEach((project) => {
    if (
      project.getProjectName() != "Inbox" &&
      project.getProjectName() != "Today" &&
      project.getProjectName() != "Upcoming"
    ) {
      DomUI.createProjectButton(project);
    }
  });
};

export default initializeDOM;
