import { AddControlNode, SaveCurrentConfigFile } from "./mkconfig.js";
document.getElementById("popupButton").addEventListener('click', ShowPopup);
document.getElementById("controlTypeForm").addEventListener('submit', handleTypeSubmission);
document.getElementById("configurationForm").addEventListener('submit', (event) => {
    event.preventDefault();
    //converts parameters to dictionary and passes them to the mkconfig file
    let parameters = document.getElementsByClassName("parameter");
    let parameterdict = {};
    parameterdict["type"] = CurrentType;
    CurrentType = "";
    for (let element of parameters) {
        let value = element.value;
        let name = element.getAttribute("id");
        console.log(`${name}: ${value}`);
        parameterdict[name] = value;
    }
    AddControlNode("root", parameterdict);

    document.getElementById("configurationForm").innerHTML = ""; //clear the form
});
document.getElementById("saveButton").addEventListener("click", SaveCurrentConfigFile);


let CurrentType = "";
function handleTypeSubmission(event) {
    event.preventDefault();//stops the page from reloading
    document.getElementById("configurationForm").innerHTML = ''; // clear whatever was in the form for saftey
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
    switch (type) {
        case "Label": populateForLabel("configurationForm"); break;
        case "Increment": populateForIncrement("configurationForm"); break;
        case "Text Input": populateForTextInput("configurationForm"); break;
        case "Large Text Input": populateForLargeTextInput("configurationForm"); break;
        case "Container": populateForContainer("configurationForm"); break;
        default: break;
    }

    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.innerHTML = "Submit";

    document.getElementById("configurationForm").append(submitButton);
}
function ShowPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "flex";
    console.log("showing popup");
}
export function ClosePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
//code to populate form based on selected type
function populateForLabel(parentName) {
    appendInputToElement(parentName, "Name(must be unique): ", false, 'name');
    appendInputToElement(parentName, "Font Size: ", true, 'fontsize');
}
function populateForIncrement(parentName) {
    appendInputToElement(parentName, "Name (must be unique): ", false, 'name');
    appendInputToElement(parentName, "Minimum Value: ", true, 'minval');
    appendInputToElement(parentName, "Maximum Value: ", true, 'maxval');
    appendInputToElement(parentName, "Arrow Increment: ", true, 'arrowincrement');
    appendInputToElement(parentName, "Starting value: ", true, 'startingval');
}
function populateForTextInput(parentName) {
    appendInputToElement(parentName, "Name (must be unique): ", false, 'name');
    appendInputToElement(parentName, "Placeholder: ", false, 'placeholder');
    appendInputToElement(parentName, "disallowed characters/strings (space seperated): ", false, 'disallowedchars');
}
function populateForLargeTextInput(parentName) {
    appendInputToElement(parentName, "Name (must be unique): ", false, 'name');
    appendInputToElement(parentName, "Placeholder: ", false, 'placeholder');
    appendInputToElement(parentName, "disallowed characters/strings (space seperated): ", false, 'disallowedchars');
    appendInputToElement(parentName, "Maximum vertical size (pixels) (0 for no max size): ", true, 'maxvertsize');
}
function populateForContainer(parentName) {
    appendInputToElement(parentName, "Name (must be unique): ", false, 'name');
    appendInputToElement(parentName, "Width (percentage of window [0-100] ): ", true, 'width');
    appendInputToElement(parentName, "Element Stack Direction (horizontal or vertical): ", false, 'stackDirection');
}

function appendChildToElement(parentName, elementType, labelText) {
    const parent = document.getElementById(parentName);
    const childLabel = document.createElement("label");
    const child = document.createElement(elementType);
    childLabel.innerText = labelText;
    childLabel.appendChild(child); //input is inside the label
    parent.appendChild(child);
}
function appendInputToElement(parentName, label, numbersOnly, uniqueID) {
    const childLabel = document.createElement("label");
    const child = document.createElement("input");

    childLabel.innerText = label;
    childLabel.appendChild(child); //input is inside the label

    child.type = numbersOnly == true ? "number" : "text";
    child.setAttribute('class', "parameter");
    child.setAttribute('id', uniqueID);

    console.log(`adding ${uniqueID} to ${parentName}`);

    let test = document.getElementById(parentName);
    test.append(childLabel);
    console.log(`added ${label}`);
}
