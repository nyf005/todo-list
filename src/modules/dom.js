import ProjectButton from "../components/project_button";
import TaskCard from "../components/task_card";
import TaskItem from "../components/task-item";
import createTaskDetails from "../components/task-details";

const DOMTools = () => {
  const projectsDiv = document.getElementById("projects");
  const projectName = document.querySelector("#project-title h3");

  const taskCardsDiv = document.getElementById("task-cards");

  const taskDetailsDiv = document.getElementById("task-details");
  const checkmark = document.getElementById("checkmark");
  const taskTitleDiv = document.getElementById("task-title");
  const taskDescriptionDiv = document.getElementById("task-description");
  const taskItemsDiv = document.getElementById("task-items");

  const deleteTaskBtn = document.getElementById("deleteTaskBtn");
  const editTaskBtn = document.getElementById("editTaskBtn");
  const addItemBtn = document.getElementById("addItemBtn");

  const createProjectButton = (project) => {
    let projectBtn = ProjectButton(project);
    projectsDiv.append(projectBtn);
    return projectBtn;
  };

  const createTaskCard = (task) => {
    let taskCard = TaskCard(task);
    taskCardsDiv.appendChild(taskCard);
    return taskCard;
  };

  const showTaskDetails = (task) => {
    const { checkmark, taskTitle, taskDescription, taskItems } =
      createTaskDetails(task);

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
    taskDetailsDiv.innerHTML = "";
  };

  const setActiveTask = (selectedTask) => {
    getTaskCards().forEach((taskCard) => {
      taskCard.classList.remove("active");
    });

    selectedTask.classList.add("active");
    taskDetailsDiv.innerHTML = "";
  };

  const getProjectsBtns = () => {
    return document.querySelectorAll(".project-name");
  };

  const getTaskCards = () => {
    return document.querySelectorAll(".task");
  };

  const _emptyTaskDetails = () => {
    taskDetailsDiv.remove(checkmark);
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
  };
};

export default DOMTools;
