import "./css/style.css";
import DOMTools from "./modules/dom";
import createProject from "./modules/project";
import initializeTodo from "./initialize";

const DOM = DOMTools();

const projects = [
  {
    name: "AdWord",
  },
];

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
    projectName: "AdWord",
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
    projectName: "AdWord",
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
    projectName: "Index",
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
    projectName: "Index",
  },
];

initializeTodo(DOM, projects, tasks);

// Add click event to projectBtns
DOM.getProjectsBtns().forEach((projectBtn) => {
  projectBtn.addEventListener("click", () => {
    DOM.setActiveProject(projectBtn);

    // Load all tasks related to default project
    tasks.forEach((task) => {
      if (task.projectName == projectBtn.getAttribute("data")) {
        let taskCard = DOM.createTaskCard(task);

        // Add click event to individual tasks
        taskCard.addEventListener("click", () => {
          DOM.setActiveTask(taskCard);
          DOM.showTaskDetails(task);
        });
      }
    });
  });
});

DOM.addProjectBtn.addEventListener("click", () => {
  DOM.displayProjectForm();
  // let newProject = {
  //   name: "New Project",
  // };
  // projects.push(newProject);

  // // Add new project to DOM
  // DOM.createProjectButton(newProject);

  // DOM.getProjectsBtns().forEach((projectBtn) => {
  //   projectBtn.addEventListener("click", () => {
  //     DOM.setActiveProject(projectBtn);

  //     // Load all tasks related to project
  //     tasks.forEach((task) => {
  //       if (task.projectName == projectBtn.getAttribute("data")) {
  //         let taskCard = DOM.createTaskCard(task);

  //         // Add click event to individual tasks
  //         taskCard.addEventListener("click", () => {
  //           DOM.setActiveTask(taskCard);
  //           DOM.showTaskDetails(task);
  //         });
  //       }
  //     });
  //   });
  // });
});

// const addTaskBtn = document.getElementById("addTaskBtn");
// addTaskBtn.addEventListener("click", () => {
//   let newTask = {
//     title: "Create Tiktok Ads",
//     description: `In, esse eum
//     corporis ipsam veniam amet magnam sapiente. Iste sequi voluptas in beatae fugiat
//     distinctio vero! Illum expedita voluptatum fugiat labore quidem saepe odio
//     molestiae nisi. Velit dolorum iusto nulla rem corporis aperiam saepe architecto
//     blanditiis debitis fuga? Magni.`,
//     dueDate: "12/01/2023",
//     priority: "low",
//     completed: false,
//   };
//   tasks.push(newTask);
//   DOM.createTaskCard(newTask);

//   DOM.getTaskCards().forEach((taskCard, index) => {
//     taskCard.addEventListener("click", () => {
//       DOM.setActiveTask(taskCard);
//       DOM.showTaskDetails(tasks[index]);
//       DOM.setTaskActionBtn(index);
//     });
//   });
// });

// DOM.getTaskCards().forEach((taskCard, index) => {
//   taskCard.addEventListener("click", () => {
//     DOM.setActiveTask(taskCard);
//     DOM.showTaskDetails(tasks[index]);
//     DOM.setTaskActionBtnIndex(index);
//   });
// });

// // Should be done when selecting a task
// // DOM.setActiveTask(DOM.getTaskCards()[0]);
// // DOM.showTaskDetails(tasks[0]);
// // DOM.setTaskActionBtnIndex(0);

// const editTaskBtn = document.getElementById("editTaskBtn");
// const addItemBtn = document.getElementById("addItemBtn");

// addItemBtn.addEventListener("click", () => {
//   DOM.createTaskItem({
//     value: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
//   });
// });
