import create from "../assets/icons/create.svg";
import trash from "../assets/icons/trash.svg";

export default function TaskItemComponent(taskItem) {
  const item = document.createElement("div");
  item.className = "item";
  item.setAttribute("data-title", taskItem.title);

  const itemContent = document.createElement("div");
  itemContent.className = "item-content";

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", taskItem.title);
  checkbox.checked = taskItem.completed;

  const label = document.createElement("label");
  label.textContent = taskItem.title;
  label.setAttribute("for", taskItem.title);

  itemContent.append(checkbox, label);

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("data-title", taskItem.title);
  // deleteBtn.className = "actionBtn";
  const trashIcon = document.createElement("img");
  trashIcon.setAttribute("src", trash);
  deleteBtn.appendChild(trashIcon);

  item.append(itemContent, deleteBtn);

  return item;
}
