import plus from "../assets/icons/plus.svg";

export default function addNewProjectBtn() {
  const button = document.createElement("button");
  button.setAttribute("id", "addProject");

  const img = document.createElement("img");
  img.src = plus;

  button.append(img, "New Project");

  return button;
}
