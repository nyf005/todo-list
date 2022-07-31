export default function ProjectButton(project) {
  const button = document.createElement("button");
  button.className = "project-name";
  button.setAttribute("data", project.name);

  const dot = document.createElement("div");
  dot.className = "dot";

  const span = document.createElement("span");
  span.textContent = project.name;

  button.append(dot, span);

  return button;
}
