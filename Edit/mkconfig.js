//Control Tree
var CurrentGame = {
  "Name": "",
  "Year": "",
  "Controls": [
    {
      "Name": "root",
      "type": "root",
      "children": [

      ]
    }
  ]
}
export function AddControlNode(ParentName, Name, Type, parameters) {
  
  var newChildNode = {
    "Name": Name,
    "Type": Type,
    "Children": [],
    "Parameters": parameters //this is for any settings that should apply to the control
  }
  //Add to parent
  if (ParentName != "root") {
    var ParentNode = findDictionaryByName(CurrentGame.Controls, ParentName);

  } else {
    var ParentNode = "root";
  }
  ParentNode.children.append(newChildNode);
}
//Creates a div that the user can select to edit any node in the Control Tree
export function GenerateDictionarySelectionDiv() {
  //root div of the tree
  const div = document.createElement("div");
  //first node containing the Game name and year
  const initNode = document.createElement("button");
  initNode.innerHTML = `${CurrentGame["Name"]}:${CurrentGame["Year"]}`;
  div.appendChild(initNode);
  const arr = printNonDictionaryEntries(CurrentGame);
  var lastdepth=0;
  for(const str in arr){
    
  }
}


//
// this will probably not work
//
//
//
//TODO:: Find a way to display the current Node tree to the user
function printNonDictionaryEntries(obj, current=[], depth=0) {
    // Iterate through the keys in the object
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            // Check if the value is an object or an array
            if (typeof value === "object" && value !== null) {
                // only iterate through the children array
                if (Array.isArray(value) && value.Name === "Children") {
                    // If it's an array, iterate through its elements
                    for (const element of value) {
                        if (typeof element === "object" && element !== null) {
                            // Recursively process nested dictionaries
                            printNonDictionaryEntries(element, current, ++depth);
                        }
                    }
                } else {
                    // Recursively process nested dictionaries
                    printNonDictionaryEntries(value, current, ++depth);
                }
            } else {
                // If it's not a dictionary or array, print the key and value
              current.append(`${key}, ${obj[key], depth}`);
            }
        }
    }
}
//recusivly searches the main dictionary for a node based on the name of the node
function findDictionaryByName(obj, targetName, depth = 0) {
  // If the current object has an array of dictionaries, search it
  if (Array.isArray(obj.dictionaries)) {
    for (const dictionary of obj.dictionaries) {
      if (dictionary.name === targetName) {
        return dictionary;
      }
    }
  }

  // Loop through the properties of the current object
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      // If the property is an object, recursively search it
      if (typeof value === "object" && value !== null) {
        depth += 1;
        const result = findDictionaryByName(value, targetName, depth);
        if (result) {
          return result;
        }
      }
    }
  }

  // Return null if the dictionary is not found
  return null;
}

