const fs = require("fs");
const path = require("path");
import { getAppDataPath } from "./Edit/mkconfig.js";
import { setFileName } from "./Form/inputProcessing.js";
document.addEventListener("DOMContentLoaded", AddConfigs);
function AddConfigs(){
    if (fs.existsSync(path.join(getAppDataPath(), "/FRSP6498"))) {
        let files = fs.readdirSync(path.join(getAppDataPath(), "/FRSP6498"));
        const container = document.getElementById("configs");
        if (files.length === 0) {
            alert("No configs Found. Please create one");
        }
        files.forEach(file => {
            let element = document.createElement("a");
            let elementContainer = document.createElement("div");
            element.setAttribute("id", file);
            element.innerHTML = file;
            if (file != null) {
                element.addEventListener("click", () => {
                    const element = document.getElementById(file);
                    setFileName(element.getAttribute("id"));
                    window.location.assign("Form/index.html");
                }); //get the config information to the next window
            }
            elementContainer.append(element);
            container.append(elementContainer);
        });
        return;
    }else{
        alert("No configs Found. Please create one");
    }
}
