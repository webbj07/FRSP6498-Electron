import { getGameName, loadConfig } from "./inputProcessing.js";

//change the form title to the name of the game
document.addEventListener("DOMContentLoaded", ()=>{
    loadConfig();
    document.getElementById("FormTitle").innerHTML = getGameName();
})
