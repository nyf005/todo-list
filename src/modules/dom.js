import ProjectButton from "../ui_components/project_button";
import TaskCard from "../ui_components/task_card";
import TaskItem from "../ui_components/task-item";
import createTaskDetails from "../ui_components/task-details";
import createProjectForm from "../ui_components/project_form";

const DOMTools = () => {
  const projectsDiv = document.getElementById("projects");
  const projectName = document.querySelector("#project-title h3");
  const addProjectBtn = document.getElementById("addProject");

  const taskCardsDiv = document.getElementById("task-cards");

  const taskActionsDiv = document.getElementById("task-actions");
  const taskDetailsDiv = document.getElementById("task-details");
  const taskItemsDiv = document.getElementById("task-items");

  const deleteTaskBtn = document.getElementById("deleteTaskBtn");
  const editTaskBtn = document.getElementById("editTaskBtn");
  const addItemBtn = document.getElementById("addItemBtn");

  const createProjectButton = (project) => {
    let projectBtn = ProjectButton(project);
    projectsDiv.append(projectBtn);
    return projectBtn;
  };

  const displayProjectForm = () => {
    addProjectBtn.parentNode.replaceChild(createProjectForm(), addProjectBtn);
  };

  const hideProjectForm = () => {};

  const createTaskCard = (task) => {
    let taskCard = TaskCard(task);
    taskCardsDiv.appendChild(taskCard);
    return taskCard;
  };

  const showTaskDetails = (task) => {
    const {
      checkmark,
      taskTitle,
      taskDescription,
      taskItems,
      deleteTaskBtn,
      editTaskBtn,
      addItemBtn,
    } = createTaskDetails(task);

    taskActionsDiv.append(editTaskBtn, deleteTaskBtn, addItemBtn);
    taskDetailsDiv.append(checkmark, taskTitle, taskDescription, taskItems);
  };

  const createTaskItem = (taskItem) => {
    const item = TaskItem(taskItem);
    taskItemsDiv.appendChild(item);
    taskDetailsDiv.appendChild(taskItemsDiv);
  };

  const setTaskActionBtnIndex = (index) => {
    deleteTaskBtn.setAttribute("data-index", index);
    editTaskBtn.setAttribute("data-index", index);
    addItemBtn.setAttribute("data-index", index);
  };

  const setTasksHeader = (name) => {
    projectName.textContent = `${name} Tasks`;
  };

  const setActiveProject = (selectedProject) => {
    getProjectsBtns().forEach((projectBtn) => {
      projectBtn.classList.remove("active");
    });

    selectedProject.classList.add("active");
    setTasksHeader(
      selectedProject.getAttribute("data") ?? selectedProject.outerText
    );

    taskCardsDiv.innerHTML = "";
    taskActionsDiv.innerHTML = "";
    taskDetailsDiv.innerHTML = "";
  };

  const setActiveTask = (selectedTask) => {
    getTaskCards().forEach((taskCard) => {
      taskCard.classList.remove("active");
    });

    selectedTask.classList.add("active");
    taskActionsDiv.innerHTML = "";
    taskDetailsDiv.innerHTML = "";
  };

  const getProjectsBtns = () => {
    return document.querySelectorAll(".project-name");
  };

  const getTaskCards = () => {
    return document.querySelectorAll(".task");
  };

  return {
    createProjectButton,
    createTaskCard,
    createTaskItem,
    getProjectsBtns,
    getTaskCards,
    setTasksHeader,
    setActiveProject,
    setActiveTask,
    setTaskActionBtnIndex,
    showTaskDetails,
    displayProjectForm,
  };
};

export default DOMTools;
