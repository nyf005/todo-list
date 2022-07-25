import "./css/style.css";
import createTaskCard from "./components/task-card";
import creatProjectButton from "./components/project-button";
import taskDetailsHeader from "./components/task-details-header";

const projects = document.getElementById("projects");
const newProject = {
  name: "AdWord",
};

projects.append(creatProjectButton(newProject));

const projectName = document.querySelector("#project-title h3");
projectName.textContent = newProject.name;

const tasks = document.getElementById("tasks");
const newTask = {
  title: "Create AdWords new campain",
  dueDate: "12/01/2023",
  priority: "high",
  completed: true,
};

tasks.appendChild(createTaskCard(newTask));

const taskDetails = document.getElementById("task-details");
const { checkmark, taskTitle } = taskDetailsHeader(newTask);
taskDetails.append(checkmark, taskTitle);
