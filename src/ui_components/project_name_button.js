export default function ProjectButton(projectName) {
  const button = document.createElement("button");
  button.className = "project-name";
  button.setAttribute("data", projectName);

  const dot = document.createElement("div");
  dot.className = "dot";

  const span = document.createElement("span");
  span.textContent = projectName;

  button.append(dot, span);

  return button;
}
