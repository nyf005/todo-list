import clock from "../assets/icons/clock.svg";

import createProjectButton from "../components/project_button";
import createTaskCard from "../components/task_card";
import createTaskItem from "../components/task-item";

const DOMTools = () => {
  const projectName = document.querySelector("#project-title h3");
  const taskDetailsDiv = document.getElementById("task-details");

  const taskDetailsStatus = document.getElementById("task-status");
  const taskDetailsTitle = document.querySelector("#task-title h2");
  const clockIcon = document.querySelector(".subtitle img");
  const taskDetailsDueDate = document.querySelector("#details-due-date p");
  const taskDetailsPriority = document.querySelector("#task-details .priority");
  const taskDetailsDescription = document.getElementById("task-description");

  const taskItemsDiv = document.getElementById("task-items");

  const deleteTaskBtn = document.getElementById("deleteTaskBtn");
  const editTaskBtn = document.getElementById("editTaskBtn");
  const addItemBtn = document.getElementById("addItemBtn");

  const addProjectButton = (project) => {
    createProjectButton(project);
  };

  const addTaskCard = (task) => {
    createTaskCard(task);
  };

  const showTaskDetails = (task) => {
    taskDetailsStatus.checked = task.completed;
    taskDetailsTitle.textContent = task.title;
    clockIcon.setAttribute("src", clock);
    taskDetailsDueDate.textContent = task.dueDate;
    taskDetailsPriority.textContent = task.priority;
    taskDetailsDescription.textContent = task.description;
  };

  const addTaskItem = (taskItem) => {
    const item = createTaskItem(taskItem);
    taskItemsDiv.appendChild(item);
    taskDetailsDiv.appendChild(taskItemsDiv);
  };

  const setTaskActionBtn = (index) => {
    deleteTaskBtn.setAttribute("data-index", index);
    editTaskBtn.setAttribute("data-index", index);
    addItemBtn.setAttribute("data-index", index);
  };

  const setTasksHeader = (project) => {
    projectName.textContent = `${project.name} Tasks`;
  };

  let selectedTaskCard = null;
  const setActiveCard = (selectedCard) => {
    getTaskCards().forEach((taskCard) => {
      if (taskCard.classList.contains("active")) {
        taskCard.classList.remove("active");
      }
      selectedCard.classList.add("active");

      selectedTaskCard = selectedCard;
    });

    taskItemsDiv.innerHTML = "";
  };

  const getTaskCards = () => {
    return document.querySelectorAll(".task");
  };

  return {
    addProjectButton,
    setTasksHeader,
    addTaskCard,
    showTaskDetails,
    addTaskItem,
    setActiveCard,
    getTaskCards,
    setTaskActionBtn,
  };
};

export default DOMTools;
