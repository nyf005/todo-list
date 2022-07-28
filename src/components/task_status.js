export default function createTaskDetailsStatus(status) {
  const detailsStatusCheckbox = document.createElement("input");
  detailsStatusCheckbox.setAttribute("type", "checkbox");
  detailsStatusCheckbox.setAttribute("id", "task-status");

  const detailsStatusLabel = document.createElement("label");
  detailsStatusLabel.setAttribute("for", "task-status");

  detailsStatusCheckbox.checked = status;

  return { detailsStatusCheckbox, detailsStatusLabel };
}
