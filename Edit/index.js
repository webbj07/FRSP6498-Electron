document.getElementById("popupButton").addEventListener('click', ShowPopup);
document.getElementById("controlTypeForm").addEventListener('submit', handleTypeSubmission);
//window.onclick = function(event) {
  //const popup = document.getElementById("popup");
  //if (event.target === popup) {
    //return;
  //}
  //popup.style.display = "none";
let CurrentType = "";

function handleTypeSubmission(){
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  console.log("hiding popup");
  let type = document.getElementById("ElementTypeSelector").value;
  if (type === "") {
    console.log("no type selected ... returning");
    return;
  }
  CurrentType = type;
  console.log(type);
  switch (type){
    case "Label": populateForLabel(); return;
    case "Increment": populateForIncrement(); return;
    case "Text Input": populateForTextInput(); return;
    case "Large Text Input": populateForLargeTextInput(); return;
    case "Container": populateForContainer(); return;
    default: return;
  }
}
function ShowPopup(){
  const popup = document.getElementById("popup");
  popup.style.display = "flex";
  console.log("showing popup");
}
export function ClosePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}
//code to populate form based on selected type
function populateForLabel() {
  appendInputToElement("controlConfiguration", "Name(must be unique): ", false);
  appendInputToElement("controlConfiguration", "Font Size: ", true);
}
function populateForIncrement() {
  appendInputToElement("controlConfiguration", "Name (must be unique): ", false);
  appendInputToElement("controlConfiguration", "Minimum Value: ", true);
  appendInputToElement("controlConfiguration", "Maximum Value: ", true);
  appendInputToElement("controlConfiguration", "Arrow Increment: ", true);
  appendInputToElement("controlConfiguration", "Starting value: ", true);
}
function populateForTextInput() {
  appendInputToElement("controlConfiguration", "Name (must be unique): ", false);
  appendInputToElement("controlConfiguration", "Placeholder: ", false);
  appendInputToElement("controlConfiguration", "disallowed characters/strings (space seperated): ", false);
}
function populateForLargeTextInput() {
  appendInputToElement("controlConfiguration", "Name (must be unique): ", false);
  appendInputToElement("controlConfiguration", "Placeholder: ", false);
  appendInputToElement("controlConfiguration", "disallowed characters/strings (space seperated): ", false);
  appendInputToElement("controlConfiguration", "Maximum vertical size (pixels) (0 for no max size): ", true);
}
function populateForContainer() {
  appendInputToElement("controlConfiguration", "Name (must be unique): ", false);
  appendInputToElement("controlConfiguration", "Width (percentage of window [0-100] ): ", true);
  appendInputToElement("controlConfiguration", "Element Stack Direction (horizontal or vertical): ", false);
}

function appendChildToElement(parentName, elementType, labelText){
  const parent = document.getElementById(parentName);
  const childLabel = document.createElement("label");
  const child = document.createElement(elementType);
  childLabel.innerText = labelText;
  childLabel.appendChild(child); //input is inside the label
  parent.appendChild(child);
}
function appendInputToElement(parentName, label, numbersOnly){
  const parent = document.getElementById(parentName);
  const childLabel = document.createElement("label");
  const child = document.createElement("input");
  console.log("setting type");
  child.type = numbersOnly == true ? "number" : "text";
  console.log("finished setting type");
  childLabel.innerText = label;
  childLabel.appendChild(child); //input is inside the label
  parent.appendChild(child);
}

