export default function TaskFormComponent(projectsList, currentProject, task) {
  const form = document.createElement("form");
  form.setAttribute("id", "task-form");
  form.setAttribute("action", "");
  form.setAttribute("method", "post");

  const header = document.createElement("h3");
  header.textContent = "Create a task";

  const projectFormElement = document.createElement("div");
  projectFormElement.className = "form-element";

  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.textContent = "Project";

  const projectSelect = document.createElement("select");
  projectSelect.setAttribute("id", "project");
  projectSelect.setAttribute("name", "project");

  projectsList.forEach((project) => {
    let option = document.createElement("option");
    option.value = project.getProjectName();
    if (option.value == currentProject) {
      option.selected = true;
    }
    option.textContent = project.getProjectName();
    projectSelect.appendChild(option);
  });

  projectFormElement.append(projectLabel, projectSelect);

  const titleFormElement = document.createElement("div");
  titleFormElement.className = "form-element";

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("required", "required");

  titleFormElement.append(titleLabel, titleInput);

  const descriptionFormElement = document.createElement("div");
  descriptionFormElement.className = "form-element";

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description");
  descriptionLabel.textContent = "Description";

  const descriptionTextarea = document.createElement("textarea");
  descriptionTextarea.setAttribute("id", "description");
  descriptionTextarea.setAttribute("name", "description");

  descriptionTextarea.setAttribute("cols", "30");
  descriptionTextarea.setAttribute("rows", "10");

  descriptionFormElement.append(descriptionLabel, descriptionTextarea);

  const dueDateFormElement = document.createElement("div");
  dueDateFormElement.className = "form-element";

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "due-date");
  dueDateLabel.textContent = "Due date";

  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("id", "due-date");
  dueDateInput.setAttribute("name", "due-date");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("required", "required");

  dueDateFormElement.append(dueDateLabel, dueDateInput);

  const priorityFormElement = document.createElement("div");
  priorityFormElement.className = "form-element";

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priority";

  const prioritySelect = document.createElement("select");
  prioritySelect.setAttribute("id", "priority");
  prioritySelect.setAttribute("name", "priority");

  const highOption = document.createElement("option");
  highOption.value = "high";
  highOption.textContent = "High";

  const normalOption = document.createElement("option");
  normalOption.value = "normal";
  normalOption.textContent = "Normal";

  const lowOption = document.createElement("option");
  lowOption.value = "low";
  lowOption.textContent = "Low";

  prioritySelect.append(lowOption, normalOption, highOption);

  priorityFormElement.append(priorityLabel, prioritySelect);

  if (task) {
    header.textContent = `Update ${task.title} ${task.title ? "'s" : ""} task`;
    projectSelect.value = currentProject;
    projectSelect.setAttribute("disabled", "disabled");
    titleInput.value = task.title;
    titleInput.setAttribute("disabled", "disabled");
    descriptionTextarea.value = task.description;
    dueDateInput.value = task.dueDate;
    prioritySelect.value = task.priority;
  }

  const formActionBtns = document.createElement("div");
  formActionBtns.setAttribute("id", "task-form-actions");

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = task ? "Update task" : "Create task";

  const cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.textContent = "Cancel";

  formActionBtns.append(submitBtn, cancelBtn);

  form.append(
    header,
    projectFormElement,
    titleFormElement,
    descriptionFormElement,
    dueDateFormElement,
    priorityFormElement,
    formActionBtns
  );

  return form;
}
