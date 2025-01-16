document.getElementById("popupButton").addEventListener('click', ShowPopup);
document.getElementById("controlTypeForm").addEventListener('submit', handleTypeSubmission);
//window.onclick = function(event) {
  //const popup = document.getElementById("popup");
  //if (event.target === popup) {
    //return;
  //}
  //popup.style.display = "none";
let CurrentType = "";

function handleTypeSubmission(event){
  event.preventDefault();
  document.getElementById("controlConfiguration").innerHTML = ''; // clear whatever was in the form for saftey
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  console.log("hiding popup");
  let type = document.getElementById("ElementTypeSelector").value;
  if (type === "") {
    console.log("no type selected ... returning");
    return;
  }
  CurrentType = type;
  document.getElementById("configurationHeader").innerHTML = type;
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
  appendInputToElement("controlConfiguration", "Name(must be unique): ", false, 'name');
  appendInputToElement("controlConfiguration", "Font Size: ", true, 'fontsize');
}
function populateForIncrement() {
  appendInputToElement("controlConfiguration", "Name (must be unique): ", false, 'name');
  appendInputToElement("controlConfiguration", "Minimum Value: ", true, 'minval');
  appendInputToElement("controlConfiguration", "Maximum Value: ", true, 'maxval');
  appendInputToElement("controlConfiguration", "Arrow Increment: ", true, 'arrowincrement');
  appendInputToElement("controlConfiguration", "Starting value: ", true, 'startingval');
}
function populateForTextInput() {
  appendInputToElement("controlConfiguration", "Name (must be unique): ", false, 'name');
  appendInputToElement("controlConfiguration", "Placeholder: ", false, 'placeholder');
  appendInputToElement("controlConfiguration", "disallowed characters/strings (space seperated): ", false,'disallowedchars');
}
function populateForLargeTextInput() {
  appendInputToElement("controlConfiguration", "Name (must be unique): ", false, 'name');
  appendInputToElement("controlConfiguration", "Placeholder: ", false, 'placeholder');
  appendInputToElement("controlConfiguration", "disallowed characters/strings (space seperated): ", false, 'disallowedchars');
  appendInputToElement("controlConfiguration", "Maximum vertical size (pixels) (0 for no max size): ", true, 'maxvertsize');
}
function populateForContainer() {
  appendInputToElement("controlConfiguration", "Name (must be unique): ", false, 'name');
  appendInputToElement("controlConfiguration", "Width (percentage of window [0-100] ): ", true, 'width');
  appendInputToElement("controlConfiguration", "Element Stack Direction (horizontal or vertical): ", false, 'stackDirection');
}

function appendChildToElement(parentName, elementType, labelText){
  const parent = document.getElementById(parentName);
  const childLabel = document.createElement("label");
  const child = document.createElement(elementType);
  childLabel.innerText = labelText;
  childLabel.appendChild(child); //input is inside the label
  parent.appendChild(child);
}
function appendInputToElement(parentName, label, numbersOnly, uniqueID){
  const childLabel = document.createElement("label");
  const child = document.createElement("input");

  childLabel.innerText = label;
  childLabel.appendChild(child); //input is inside the label

  child.type = numbersOnly == true ? "number" : "text";
  child.setAttribute('class') = "parameter";
  child.setAttribute('id') = uniqueID;
  

  document.getElementById(parentName).appendChild(childLabel);
  console.log(`added ${label}`);
}

