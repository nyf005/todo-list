import "./css/style.css";
import DOMTools from "./modules/dom";

const newProject = {
  name: "AdWord",
};

const tasks = [
  {
    title: "Create AdWords new campain",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, officia iste
    doloribus adipisci odit nulla expedita saepe cupiditate praesentium ipsum, eos
    et corporis in enim tenetur aut at. Laborum esse facilis ex similique suscipit
    nulla optio blanditiis deserunt, molestias earum? `,
    dueDate: "10/09/2022",
    priority: "high",
    completed: true,
  },
  {
    title: "Create Facebook Ads",
    description: `Eligendi ad recusandae illum
    blanditiis, rem animi aliquid laborum quaerat quibusdam pariatur inventore!
    Quisquam consequuntur animi ratione sapiente repellat at unde quibusdam
    mollitia, obcaecati ea iure iste ut molestias nihil omnis possimus eveniet hic
    alias architecto, tenetur beatae quam illum. `,
    dueDate: "12/10/2022",
    priority: "moderate",
    completed: false,
  },
  {
    title: "Create Instagram Ads",
    description: `Similique temporibus quibusdam qui
    mollitia ipsum necessitatibus asperiores voluptatem atque accusantium ducimus
    repudiandae incidunt laborum voluptatum facere sunt nemo quidem magni ipsam
    maxime, error quaerat cumque laboriosam. Natus unde illo, fugit doloremque
    corporis voluptatum minima porro numquam repellat excepturi omnis! `,
    dueDate: "11/11/2022",
    priority: "normal",
    completed: false,
  },
  {
    title: "Create Tiktok Ads",
    description: `In, esse eum
    corporis ipsam veniam amet magnam sapiente. Iste sequi voluptas in beatae fugiat
    distinctio vero! Illum expedita voluptatum fugiat labore quidem saepe odio
    molestiae nisi. Velit dolorum iusto nulla rem corporis aperiam saepe architecto
    blanditiis debitis fuga? Magni.`,
    dueDate: "12/01/2023",
    priority: "low",
    completed: false,
  },
];

const DOM = DOMTools();
DOM.addProjectButton(newProject);

DOM.setTasksHeader(newProject);

tasks.forEach((newTask) => {
  DOM.addTaskCard(newTask);
});

DOM.setActiveCard(DOM.getTaskCards()[0]);
DOM.showTaskDetails(tasks[0]);
DOM.setTaskActionBtn(0);

DOM.getTaskCards().forEach((taskCard, index) => {
  taskCard.addEventListener("click", () => {
    DOM.setActiveCard(taskCard);
    DOM.showTaskDetails(tasks[index]);
    DOM.setTaskActionBtn(index);
  });
});

const editTaskBtn = document.getElementById("editTaskBtn");
const addItemBtn = document.getElementById("addItemBtn");

addItemBtn.addEventListener("click", () => {
  DOM.addTaskItem({
    value: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Voluptatibus nihil reiciendis ipsam hic! Voluptate, corrupti
    vitae minus libero totam fugit ea quis laboriosam esse beatae
    provident magni? Quia, natus harum!`,
  });
});
