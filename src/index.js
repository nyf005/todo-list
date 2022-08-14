import "./css/style.css";
import DomUI from "./dom_ui";
import Project from "./models/project";
import Task from "./models/task";
import TaskItem from "./models/task_item";
import initializeDOM from "./initialize";

import Storage from "./storage";

const Controller = (() => {
  Storage.init();
  let projectsList = Storage.getProjects();

  let inboxProject = Project("Inbox");
  projectsList.add(inboxProject);
  Storage.saveProject(inboxProject.getProjectInfos());

  initializeDOM(projectsList);

  const submitProjectForm = (projectEntry) => {
    const newProject = Project(projectEntry);

    const projectExists = projectsList
      .getAll()
      .find((project) => project.getProjectInfos().name == projectEntry);

    if (projectExists == undefined) {
      projectsList.add(newProject);
      Storage.saveProject(newProject.getProjectInfos());

      DomUI.createProjectButton(newProject);
    } else {
      alert("Project " + projectEntry + " already exists");
    }
  };

  const deleteProject = (projectName) => {
    projectsList.remove(projectName);
    Storage.removeProject(projectName);

    projectsList = Storage.getProjects();
    projectsList.getAll().forEach((project) => {
      if (project.getProjectName() != "Inbox") {
        DomUI.createProjectButton(project);
      }
    });

    // Display Inbox project after a project is deleted
    DomUI.setActiveProject(DomUI.getInboxProjectBtn());
    DomUI.showTaskCards(projectsList.getProject("Inbox"));
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

        const taskExists = project
          .getTasks()
          .find((task) => task.getTaskInfos().title == title);

        if (taskExists == undefined) {
          project.addTask(newTask);
          Storage.saveTask(project.getProjectInfos(), newTask.getTaskInfos());
        }
      }
    }

    DomUI.showTaskCards(project);
  };

  const submitMoveTaskForm = (
    newProjectName,
    currentProjectName,
    taskTitle
  ) => {
    const currentProject = projectsList.getProject(currentProjectName);
    const task = currentProject.getTask(taskTitle);
    const newProject = projectsList.getProject(newProjectName);

    const taskExists = newProject
      .getTasks()
      .find((task) => task.getTaskInfos().title == taskTitle);

    if (taskExists == undefined) {
      newProject.addTask(task);
      currentProject.removeTask(taskTitle);

      Storage.moveTask(
        currentProject.getProjectInfos(),
        newProject.getProjectInfos(),
        task.getTaskInfos()
      );
    }

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
    Storage.removeTask(project.getProjectInfos(), taskTitle);
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

    const taskItemExists = currentTask.getTaskItem(taskItemEntry);

    if (taskItemExists == undefined) {
      // TODO: Add current taskItem to task
      currentTask.addItem(newTaskItem);

      Storage.saveTask(
        currentProject.getProjectInfos(),
        currentProject.getTask(taskTitle).getTaskInfos()
      );

      // TODO: Call the DOMUI function to display taskItem
      DomUI.createTaskItem(newTaskItem.getTaskItemInfos());
    }
  };

  const updateTaskItemStatus = (taskTitle, taskItemTitle) => {
    const currentProject = projectsList.getProject(
      DomUI.getCurrentProject().getAttribute("data-name")
    );

    const currentTask = currentProject.getTask(taskTitle);
    currentTask.getTaskItem(taskItemTitle).updateStatus();

    Storage.saveTask(
      currentProject.getProjectInfos(),
      currentProject.getTask(taskTitle).getTaskInfos()
    );
  };

  const deleteTaskItem = (taskTitle, taskItemTitle) => {
    const currentProject = projectsList.getProject(
      DomUI.getCurrentProject().getAttribute("data-name")
    );

    const currentTask = currentProject.getTask(taskTitle);
    currentTask.removeItem(taskItemTitle);

    Storage.saveTask(
      currentProject.getProjectInfos(),
      currentProject.getTask(taskTitle).getTaskInfos()
    );
  };

  return {
    getProjectsList,
    submitProjectForm,
    deleteProject,
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
