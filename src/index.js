import "./css/style.css";
import DomUI from "./modules/dom_ui";
import ProjectList from "./modules/project_list";
import Project from "./modules/project";
import Task from "./modules/task";
import initializeTodo from "./initialize";

const Controller = (() => {
  const projectsList = ProjectList();
  const defaultProject = Project("Inbox");
  projectsList.add(defaultProject);

  // const testProject = Project("Adwords");
  // projectsList.add(testProject);

  initializeTodo(projectsList);
  const DOM = DomUI();

  const submitProjectForm = (e) => {
    e.preventDefault();
    const newProject = Project(e.target.elements[0].value);
    projectsList.add(newProject);
    DOM.createProjectButton(newProject);
    DOM.hideProjectForm();
  };

  const submitTaskForm = (e, mode, lastProject) => {
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
        DOM.showTaskDetails(project.getTask(title).getTaskInfos());
      } else {
        const newTask = Task(title, description, dueDate, priority);
        project.addTask(newTask);
      }
    }

    DOM.showTaskCards(project);
    DOM.hideTaskForm();
  };

  const deleteTask = (taskTitle) => {
    const project = projectsList.getProject(
      DOM.getCurrentProject().getAttribute("data-name")
    );

    project.removeTask(taskTitle);
    DOM.showTaskCards(project);
  };

  const getProjectsList = () => projectsList.getAll();

  return { getProjectsList, submitProjectForm, submitTaskForm, deleteTask };
})();

export default Controller;
