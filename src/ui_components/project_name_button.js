export default function ProjectButton(projectName) {
  const button = document.createElement("button");
  button.className = "project-name";
  button.setAttribute("data-name", projectName);

  const dot = document.createElement("div");
  dot.className = "dot";
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  dot.style.borderColor = `#${randomColor}`;

  const span = document.createElement("span");
  span.textContent = projectName;

  button.append(dot, span);

  return button;
}
