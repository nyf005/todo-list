import create from "../assets/icons/create.svg";
import trash from "../assets/icons/trash.svg";

export default function createTaskItem(taskItem) {
  const item = document.createElement("div");
  item.className = "item";

  const itemContent = document.createElement("div");
  itemContent.className = "item-content";

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  // checkbox.setAttribute("id", taskItem);

  const label = document.createElement("label");
  // label.setAttribute("for", taskItem);
  label.textContent = taskItem.value;

  itemContent.append(checkbox, label);

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

  item.append(itemContent, itemActions);

  return item;
}
