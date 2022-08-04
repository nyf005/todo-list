import "./css/style.css";
import DomUI from "./dom_ui";
import ProjectList from "./models/project_list";
import Project from "./models/project";
import Task from "./models/task";
import initializeTodo from "./initialize";

const Controller = (() => {
  const projectsList = ProjectList();
  const defaultProject = Project("Inbox");
  projectsList.add(defaultProject);

  const testProject = Project("Adwords");
  projectsList.add(testProject);

  initializeTodo(projectsList);

  const submitProjectForm = (projectEntry) => {
    const newProject = Project(projectEntry);
    projectsList.add(newProject);
    DomUI.createProjectButton(newProject);
  };

  const submitTaskForm = (e, mode) => {
    e.preventDefault();
    const projectName = e.target.elements[0].value;
    const title = e.target.elements[1].value;
    const description = e.target.elements[2].value;
    const dueDate = e.target.elements[3].value;
    const priority = e.target.elements[4].value;

    const project = projectsList.getProject(projectName);
    if (project) {
      if (mode == "edit") {
        project
          .getTask(title)
          .updateTask(title, description, dueDate, priority);
        DomUI.showTaskDetails(project.getTask(title).getTaskInfos());
      } else {
        const newTask = Task(title, description, dueDate, priority);
        project.addTask(newTask);
      }
    }

    DomUI.showTaskCards(project);
  };

  const submitMoveTaskForm = (e, currentProjectName, taskName) => {
    e.preventDefault();
    const newProjectName = e.target.elements[0].value;

    const currentProject = projectsList.getProject(currentProjectName);
    const task = currentProject.getTask(taskName);
    const newProject = projectsList.getProject(newProjectName);

    newProject.addTask(task);
    currentProject.removeTask(taskName);
    DomUI.showTaskCards(currentProject);
  };

  const deleteTask = (taskTitle) => {
    const project = projectsList.getProject(
      DomUI.getCurrentProject().getAttribute("data-name")
    );

    project.removeTask(taskTitle);
    DomUI.showTaskCards(project);
  };

  const getProjectsList = () => projectsList.getAll();

  return {
    getProjectsList,
    submitProjectForm,
    submitTaskForm,
    submitMoveTaskForm,
    deleteTask,
  };
})();

export default Controller;
