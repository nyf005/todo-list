import clock from "../assets/icons/clock.svg";

import createProjectButton from "../components/project_button";
import createTaskCard from "../components/task_card";
import createTaskItem from "../components/task-item";
import createTaskDetailsStatus from "../components/task_status";

const DOMTools = () => {
  const projectsDiv = document.getElementById("projects");
  const projectName = document.querySelector("#project-title h3");

  const tasksDiv = document.getElementById("tasks");

  const taskDetailsDiv = document.getElementById("task-details");
  const checkmark = document.getElementById("checkmark");
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
    let newProject = createProjectButton(project);
    projectsDiv.append(newProject);
  };

  const addTaskCard = (task) => {
    let taskCard = createTaskCard(task);
    tasksDiv.appendChild(taskCard);
    return taskCard;
  };

  const showTaskDetails = (task) => {
    checkmark.innerHTML = "";
    const { detailsStatusCheckbox, detailsStatusLabel } =
      createTaskDetailsStatus(task.completed);
    checkmark.append(detailsStatusCheckbox, detailsStatusLabel);
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

  const setTaskActionBtnIndex = (index) => {
    deleteTaskBtn.setAttribute("data-index", index);
    editTaskBtn.setAttribute("data-index", index);
    addItemBtn.setAttribute("data-index", index);
  };

  const setTasksHeader = (project) => {
    projectName.textContent = `${project.name} Tasks`;
  };

  const setActiveProject = (selected) => {
    getProjectsBtns().forEach((projectBtn) => {
      if (projectBtn.classList.contains("active")) {
        projectBtn.classList.remove("active");
      }
      selected.classList.add("active");
    });

    // taskItemsDiv.innerHTML = "";
  };

  const setActiveTask = (selectedTask) => {
    getTaskCards().forEach((taskCard) => {
      if (taskCard.classList.contains("active")) {
        taskCard.classList.remove("active");
      }
      selectedTask.classList.add("active");
    });

    taskItemsDiv.innerHTML = "";
  };

  const getProjectsBtns = () => {
    return document.querySelectorAll(".project-name");
  };

  const getTaskCards = () => {
    return document.querySelectorAll(".task");
  };

  return {
    addProjectButton,
    addTaskCard,
    addTaskItem,
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
