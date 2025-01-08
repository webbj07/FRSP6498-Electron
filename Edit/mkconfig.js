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
export function AddControlNode(ParentName, Name, Type) {
  if (ParentName != "root") {
    var ParentNode = findDictionaryByName(CurrentGame.Controls, ParentName);
  } else {
    var ParentNode = "root";
  }
  var newChildNode = {
    "Name": Name,
    "Type": Type,
    "Controls": []
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

}
//TODO:: Find a way to display the current Node tree to the user
function printNonDictionaryEntries(obj, current={}, parentName, depth) {
    // Iterate through the keys in the object
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            // Check if the value is an object or an array
            if (typeof value === "object" && value !== null) {
                if (Array.isArray(value)) {
                    // If it's an array, iterate through its elements
                    for (const element of value) {
                        if (typeof element === "object" && element !== null) {
                            // Recursively process nested dictionaries
                            printNonDictionaryEntries(element);
                        }
                    }
                } else {
                    // Recursively process nested dictionaries
                    printNonDictionaryEntries(value);
                }
            } else {
                // If it's not a dictionary or array, print the key and value
                console.log(`${key}: ${value}`);
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

