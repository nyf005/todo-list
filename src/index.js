import "./css/style.css";
import DomUI from "./dom_ui";
import ProjectList from "./models/project_list";
import Project from "./models/project";
import Task from "./models/task";
import TaskItem from "./models/task_item";
import initializeDOM from "./initialize";

import Storage from "./storage";

const Controller = (() => {
  const projectsList = ProjectList();
  Storage.init();

  const defaultProject = Project("Inbox");
  projectsList.add(defaultProject);
  Storage.saveProject(defaultProject.getProjectInfos());

  initializeDOM(projectsList);

  const submitProjectForm = (projectEntry) => {
    const newProject = Project(projectEntry);
    projectsList.add(newProject);
    Storage.saveProject(newProject.getProjectInfos());

    DomUI.createProjectButton(newProject);
  };

  const submitTaskForm = (taskForm, mode) => {
    const projectName = taskForm["project"].value;
    const title = taskForm["title"].value;
    const description = taskForm["description"].value;
    const dueDate = taskForm["due-date"].value;
    const priority = taskForm["priority"].value;

    const project = projectsList.getProject(projectName);
    if (project) {
      if (mode == "edit") {
        project
          .getTask(title)
          .updateTask(title, description, dueDate, priority);
        DomUI.showTaskDetails(project.getTask(title).getTaskInfos());
        Storage.saveTask(
          project.getProjectInfos(),
          project.getTask(title).getTaskInfos()
        );
      } else {
        const newTask = Task(title, description, dueDate, priority);
        project.addTask(newTask);
        Storage.saveTask(project.getProjectInfos(), newTask.getTaskInfos());
      }
    }

    DomUI.showTaskCards(project);
  };

  const submitMoveTaskForm = (newProjectName, currentProjectName, taskName) => {
    const currentProject = projectsList.getProject(currentProjectName);
    const task = currentProject.getTask(taskName);
    const newProject = projectsList.getProject(newProjectName);

    newProject.addTask(task);
    currentProject.removeTask(taskName);
    DomUI.showTaskCards(currentProject);
  };

  const updateTaskStatus = (taskTitle) => {
    const currentProject = projectsList.getProject(
      DomUI.getCurrentProject().getAttribute("data-name")
    );

    currentProject.getTask(taskTitle).updateStatus();
    Storage.saveTask(
      currentProject.getProjectInfos(),
      currentProject.getTask(taskTitle).getTaskInfos()
    );
  };

  const deleteTask = (taskTitle) => {
    const project = projectsList.getProject(
      DomUI.getCurrentProject().getAttribute("data-name")
    );

    project.removeTask(taskTitle);
    DomUI.showTaskCards(project);
  };

  const getProjectsList = () => projectsList.getAll();

  const submitTaskItemForm = (taskTitle, taskItemEntry) => {
    const newTaskItem = TaskItem(taskItemEntry);

    // TODO: Get current task
    const currentProject = projectsList.getProject(
      DomUI.getCurrentProject().getAttribute("data-name")
    );
    const currentTask = currentProject.getTask(taskTitle);

    // TODO: Add current taskItem to task
    currentTask.addItem(newTaskItem);

    Storage.saveTaskItem(
      currentProject.getProjectInfos(),
      currentTask.getTaskInfos(),
      newTaskItem.getTaskItemInfos()
    );
    // TODO: Call the DOMUI function to display taskItem
    DomUI.createTaskItem(newTaskItem.getTaskItemInfos());
  };

  const updateTaskItemStatus = (taskTitle, taskItemTitle) => {
    const currentProject = projectsList.getProject(
      DomUI.getCurrentProject().getAttribute("data-name")
    );

    const currentTask = currentProject.getTask(taskTitle);
    currentTask.getTaskItem(taskItemTitle).updateStatus();

    Storage.saveTaskItem(
      currentProject.getProjectInfos(),
      currentTask.getTaskInfos(),
      currentTask.getTaskItem(taskItemTitle).getTaskItemInfos()
    );
  };

  const deleteTaskItem = (taskTitle, taskItemTitle) => {
    const currentProject = projectsList.getProject(
      DomUI.getCurrentProject().getAttribute("data-name")
    );

    const currentTask = currentProject.getTask(taskTitle);
    currentTask.removeItem(taskItemTitle);
  };

  return {
    getProjectsList,
    submitProjectForm,
    submitTaskForm,
    submitMoveTaskForm,
    submitTaskItemForm,
    updateTaskStatus,
    updateTaskItemStatus,
    deleteTask,
    deleteTaskItem,
  };
})();

export default Controller;
