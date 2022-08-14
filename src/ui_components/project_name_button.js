import trash from "../assets/icons/trash.svg";

export default function ProjectButtonComponent(projectName) {
  const projectBtnDiv = document.createElement("div");
  projectBtnDiv.className = "project-div";

  const nameDiv = document.createElement("div");
  nameDiv.className = "project-name";
  nameDiv.setAttribute("data-name", projectName);

  const dot = document.createElement("div");
  dot.className = "dot";
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  dot.style.borderColor = `#${randomColor}`;

  const span = document.createElement("span");
  span.textContent = projectName;

  nameDiv.append(dot, span);

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", projectName);
  const trashIcon = document.createElement("img");
  trashIcon.setAttribute("src", trash);
  deleteBtn.appendChild(trashIcon);

  return { nameDiv, deleteBtn };
}
