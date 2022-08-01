import check from "../assets/icons/check.svg";
import cross from "../assets/icons/cross.svg";

export default function createProjectForm() {
  const form = document.createElement("form");
  form.setAttribute("id", "project-form");
  form.setAttribute("action", "");
  form.setAttribute("method", "post");

  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "projectName");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Project name");
  nameInput.setAttribute("required", "required");

  const formActions = document.createElement("div");
  formActions.setAttribute("id", "project-form-actions");

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
  form.append(nameInput, formActions);

  return form;
}
