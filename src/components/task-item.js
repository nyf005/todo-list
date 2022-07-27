import create from "../assets/icons/create.svg";
import trash from "../assets/icons/trash.svg";

export default function (taskItem) {
  const item = document.createElement("div");
  item.className = "item";

  const content = document.createElement("p");
  content.textContent = taskItem.value;

  const itemActions = document.createElement("div");
  itemActions.className = "item-actions";

  const editBtn = document.createElement("button");
  editBtn.className = "actionBtn";
  const createIcon = document.createElement("img");
  createIcon.setAttribute("src", create);
  editBtn.appendChild(createIcon);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "actionBtn";
  const trashIcon = document.createElement("img");
  trashIcon.setAttribute("src", trash);
  deleteBtn.appendChild(trashIcon);

  itemActions.append(editBtn, deleteBtn);

  item.append(content, itemActions);

  return item;
}