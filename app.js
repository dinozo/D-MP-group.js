
let listName = [];

document.querySelector("#add").addEventListener("click", addNameTab)

function addNameTab() {
    let newName = document.querySelector("#name").value;

    console.log(newName);
    listName.push(newName);
    console.log(listName);
}