import "./css/style.css";
import createTaskCard from "./components/task-card";
import creatProjectButton from "./components/project-button";
import taskDetailsHeader from "./components/task-details-header";

const newProject = {
  name: "AdWord",
};

const tasks = [
  {
    title: "Create AdWords new campain",
    dueDate: "10/09/2022",
    priority: "high",
    completed: true,
  },
  {
    title: "Create Facebook Ads",
    dueDate: "12/10/2022",
    priority: "moderate",
    completed: false,
  },
  {
    title: "Create Instagram Ads",
    dueDate: "11/11/2022",
    priority: "normal",
    completed: false,
  },
  {
    title: "Create Tiktok Ads",
    dueDate: "12/01/2023",
    priority: "low",
    completed: false,
  },
];

const projectsDiv = document.getElementById("projects");
projectsDiv.append(creatProjectButton(newProject));

const projectName = document.querySelector("#project-title h3");
projectName.textContent = `${newProject.name} Tasks`;

const tasksDiv = document.getElementById("tasks");

tasks.forEach((newTask) => {
  tasksDiv.appendChild(createTaskCard(newTask));
});

const taskCards = [...document.querySelectorAll(".task")];
taskCards[1].classList.add("active");

let currentActive = taskCards[1];
taskCards.forEach((taskCard) => {
  taskCard.addEventListener("click", () => {
    currentActive.classList.remove("active");
    taskCard.classList.add("active");
    currentActive = taskCard;
  });
});

const taskDetailsDiv = document.getElementById("task-details");
const { checkmark, taskTitle } = taskDetailsHeader(tasks[1]);
taskDetailsDiv.append(checkmark, taskTitle);
