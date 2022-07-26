import "./css/style.css";
import DOMTools from "./modules/dom";

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

const DOM = DOMTools();
DOM.createProjectButton(newProject);

DOM.setTasksTitle(newProject);

tasks.forEach((newTask) => {
  DOM.createTaskCard(newTask);
});

DOM.setActiveCard(DOM.getTaskCards()[0]);
DOM.createTaskDetailsHeader(tasks[0]);
DOM.setTaskActionBtn(0);

DOM.getTaskCards().forEach((taskCard, index) => {
  taskCard.addEventListener("click", () => {
    DOM.setActiveCard(taskCard);
    DOM.createTaskDetailsHeader(tasks[index]);
    DOM.setTaskActionBtn(index);
  });
});

const addNoteBtn = document.getElementById("addNoteBtn");

addNoteBtn.addEventListener("click", () => {
  DOM.createTaskNoteItem({
    value: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Voluptatibus nihil reiciendis ipsam hic! Voluptate, corrupti
    vitae minus libero totam fugit ea quis laboriosam esse beatae
    provident magni? Quia, natus harum!`,
  });
});
