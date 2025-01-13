import { AddControlNode } from "./mkconfig.js";
//Add new Elements to the Control list from the form on form submit
document.addEventListener('submit', 
  AddControlNode(
    document.getElementById('ElementParentName'),
    document.getElementById('ElementName'),
    document.getElementById('ElementType'),
    getParameters() 
  )
);

window.onclick = function(event) {
  const popup = document.getElementById("popup");
  if(event.target === popup) {
    ClosePopup();
  }
}
function getParameters(){

}
function DisplayElementCreationDiv(){
  document.getElementById('CreatorForm').style.display = 'block';
}
function HideElementCreationDiv() {
  document.getElementById('CreatorForm').style.display = 'none';
}
export function ShowPopup(){
  const popup = document.getElementById("popup");
  popup.style.display = "absolute";
  console.log("showing popup");
}
export function ClosePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}


