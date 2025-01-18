import { getAppDataPath } from "../Edit/mkconfig.js";
const fs = require("fs");
const path = require("path");
//data should be in css
//File name should be the same as the config file
let configDirectory = "";
let header = "";
let data = "";
const configObject = null;
export function setFileName(newfileName) {
    configDirectory = path.join(getAppDataPath(), "/FRSP6498/" + newfileName);
    console.log(`New directory: ${configDirectory}`);
}
function generateHeaderFromFile() {
    //TODO::find a way to loop through nested js dictionaries
    const ControlsArray = configObject.children.root;
    let Containers = [];
    ControlsArray.forEach(key => {

    });


}
export function getGameName(){
    return configObject["name"];
}
export function loadConfig(){
    console.log(`loading config from ${configDirectory}`);

    let data = fs.readFileSync(configDirectory, {encoding:"utf-8"});
    configObject = JSON.parse(data);
    console.log(configObject);

}
