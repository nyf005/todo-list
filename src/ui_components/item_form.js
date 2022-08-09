import check from "../assets/icons/check.svg";
import cross from "../assets/icons/cross.svg";

export default function TaskItemFormComponent() {
  const form = document.createElement("form");
  form.setAttribute("id", "task-item-form");
  form.setAttribute("action", "");
  form.setAttribute("method", "post");

  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "task-item-title");
  titleInput.setAttribute("name", "task-item-title");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Enter a subtask");
  titleInput.setAttribute("required", "required");

  const formActions = document.createElement("div");
  formActions.setAttribute("id", "task-item-form-actions");

  const validateBtn = document.createElement("button");
  validateBtn.setAttribute("type", "submit");
  validateBtn.classList.add("actionBtn");
  validateBtn.setAttribute("id", "validateBtn");

  const checkIcon = document.createElement("img");
  checkIcon.src = check;

  validateBtn.appendChild(checkIcon);

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("actionBtn");
  cancelBtn.setAttribute("id", "cancelBtn");
  cancelBtn.setAttribute("type", "button");

  const crossIcon = document.createElement("img");
  crossIcon.src = cross;

  cancelBtn.appendChild(crossIcon);

  formActions.append(validateBtn, cancelBtn);
  form.append(titleInput, formActions);

  return form;
}
