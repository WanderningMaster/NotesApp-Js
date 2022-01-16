import { archiveIcons, icons } from "./cells";
import { findAllDate } from "./helpers/findDate";
import { addAllEvents } from "./evenListeners/addAllEvents";
import { countTasks, countIdeas, countRandomThoughts } from "./helpers/countCategories";

const renderTable = (dataset, tableId) => {
    const table = document.getElementById(tableId);
    console.log(`dataset length: ${dataset.length}`);
    console.log(table.dataset.name);

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
            let cellText;
            if(key === "dates"){
                let dates = "";
                try{
                    dates = findAllDate(note["content"]);
                }catch{}
                
                cellText = document.createTextNode(dates);
            }
            else{
                cellText = document.createTextNode(note[key]);
            }
            
            cell.className = key;

            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        if(table.dataset.name === "main"){
            const cell = document.createElement("td");
            cell.className = "icons";
            cell.innerHTML = icons;
            row.appendChild(cell);
        }
        if(table.dataset.name === "archive"){
            const cell = document.createElement("td");
            cell.className = "icons";
            cell.innerHTML = archiveIcons;
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
        i++;
    });

    table.append(tableBody);
    addAllEvents();
}

const countSummary = (table, archive) => {
    const summary = [];
    const taskCount = {category: "Task", active: countTasks(table), archived: countTasks(archive)};
    const ideaCount = {category: "Idea", active: countIdeas(table), archived: countIdeas(archive)};
    const randomThoughtCount = {category: "Random Thought", active: countRandomThoughts(table), archived: countRandomThoughts(archive)};
    if(!(taskCount.active === 0 && taskCount.archived === 0)){
        summary.push(taskCount);
    }
    if(!(ideaCount.active === 0 && ideaCount.archived === 0)){
        summary.push(ideaCount);
    }
    if(!(randomThoughtCount.active === 0 && randomThoughtCount.archived === 0)){
        summary.push(randomThoughtCount);
    }

    return summary;
}

let table = [
    {name: "Shop", created: "12/23/2021", category: "Task", content: "Buy milk before 12/31/2021 01/30/2020", dates: ""},
    {name: "Hometask", created: "01/10/2022", category: "Task", content: "Do hometask before 04/10/2022", dates: "04/10/2022"},
    {name: "New feature", created: "01/08/2022", category: "Idea", content: "Implement new feature in project", dates: ""},
];
let archive = [

];

export {renderTable, table, archive, countSummary};