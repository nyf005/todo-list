export default function createMoveTaskForm(projectsList, currentProjectName) {
  const form = document.createElement("form");
  form.setAttribute("id", "move_task-form");
  form.setAttribute("action", "");
  form.setAttribute("method", "post");

  const header = document.createElement("h3");
  header.textContent = "Move to";

  const projectFormElement = document.createElement("div");
  projectFormElement.className = "form-element";

  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.textContent = "Project";

  const projectSelect = document.createElement("select");
  projectSelect.setAttribute("id", "project");

  projectsList.forEach((project) => {
    if (project.getProjectName() != currentProjectName) {
      let option = document.createElement("option");
      option.value = project.getProjectName();
      option.textContent = project.getProjectName();
      projectSelect.appendChild(option);
    }
  });

  projectFormElement.append(projectLabel, projectSelect);

  const formActionBtns = document.createElement("div");
  formActionBtns.setAttribute("id", "task-form-actions");

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Move task";

  if (!projectSelect.options.length) {
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "No project to move to ...";
    projectSelect.appendChild(defaultOption);
    projectSelect.setAttribute("disabled", "disabled");
    submitBtn.setAttribute("disabled", "disabled");
  }

  const cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.textContent = "Cancel";

  formActionBtns.append(submitBtn, cancelBtn);

  form.append(header, projectFormElement, formActionBtns);

  return form;
}
