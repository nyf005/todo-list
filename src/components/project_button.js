export default function createProjectButton(project) {
  const projectsDiv = document.getElementById("projects");

  const button = document.createElement("button");
  button.className = "project-name";

  const dot = document.createElement("div");
  dot.className = "dot";

  const span = document.createElement("span");
  span.textContent = project.name;

  button.append(dot, span);

  projectsDiv.append(button);

  return projectsDiv;
}
