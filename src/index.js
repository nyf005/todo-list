import "./css/style.css";
import DomUI from "./modules/dom_ui";
import ProjectList from "./modules/project_list";
import Project from "./modules/project";
import Task from "./modules/task";
import initializeTodo from "./initialize";

const Controller = (() => {
  const projectsList = ProjectList();
  const defaultProject = Project("Inbox");
  const testProject = Project("Adwords");
  projectsList.add(defaultProject);
  projectsList.add(testProject);

  initializeTodo(projectsList);
  const DOM = DomUI();

  const submitProjectForm = (e) => {
    e.preventDefault();
    const newProject = Project(e.target.elements[0].value);
    projectsList.add(newProject);
    DOM.createProjectButton(newProject);
    DOM.hideProjectForm();
  };

  const submitTaskForm = (e) => {
    e.preventDefault();
    const projectName = e.target.elements[0].value;
    const title = e.target.elements[1].value;
    const description = e.target.elements[2].value;
    const dueDate = e.target.elements[3].value;
    const priority = e.target.elements[4].value;
    const newTask = Task(title, description, dueDate, priority);

    const project = projectsList.getProject(projectName);
    if (project) {
      project.addTask(newTask);
    }

    DOM.showTaskCards(project);
    DOM.hideTaskForm();
  };

  return { submitProjectForm, submitTaskForm };
})();

export default Controller;
