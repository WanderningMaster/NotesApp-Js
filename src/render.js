import { archiveIcons, icons } from "./cells";
import {addEventToDelButtons} from "./evenListeners/delButton"
import {addEventToEditButtons} from "./evenListeners/editButton"
import {addEventToArchiveButtons, addEventToShowArchiveButton} from "./evenListeners/archiveButton"

const renderTable = (dataset, tableId) => {
    const table = document.getElementById(tableId);
    let iconCell;
    console.log(`dataset length: ${dataset.length}`);
    console.log(table.dataset.name);
    if(table.dataset.name === "main"){
        iconCell = icons;
    }
    if(table.dataset.name === "archive"){
        iconCell = archiveIcons;
    }

    try{
        table.removeChild(table.getElementsByTagName("tbody")[0]);
    }
    catch{
        
    }//if table already created delete it an then update
    
    const tableBody = document.createElement("tbody");
    
    let i = 0;
    dataset.forEach(note => {
        const row = document.createElement("tr");
        row.contentEditable = false;
        row.className = `${i}`;
        for(const key in note){
            const cell = document.createElement("td");
            const cellText = document.createTextNode(note[key]);
            
            cell.className = key;

            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        const cell = document.createElement("td");
        cell.className = "icons";
        cell.innerHTML = iconCell;
        row.appendChild(cell);

        tableBody.appendChild(row);
        i++;
    });

    table.append(tableBody);
    addEventToEditButtons();
    addEventToDelButtons();
    addEventToArchiveButtons();
    addEventToShowArchiveButton();
}

let table = [
    {name: "Shop", created: "12/23/2021", category: "Task", content: "Buy milk before 12/31/2021", dates: "12/31/2021"},
    {name: "Hometask", created: "01/10/2022", category: "Task", content: "Do hometask before 04/10/2022", dates: "04/10/2022"},
    {name: "New feature", created: "01/08/2022", category: "Idea", content: "Implement new feature in project", dates: ""},
];
let archive = [
    
];

export {renderTable, table, archive};