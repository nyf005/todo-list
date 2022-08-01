import "./css/style.css";
import DomUI from "./modules/dom_ui";
import ProjectList from "./modules/project_list";
import Project from "./modules/project";
import initializeTodo from "./initialize";

const Controller = (() => {
  const projectsList = ProjectList();

  initializeTodo(projectsList);
  const DOM = DomUI();

  const submitProjectForm = (e) => {
    e.preventDefault();
    const newProject = Project(e.target.childNodes[0].value);
    projectsList.add(newProject);
    DOM.createProjectButton(newProject);
    DOM.hideProjectForm();
  };

  return { submitProjectForm };
})();

export default Controller;
