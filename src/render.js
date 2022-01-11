import { icons } from "./cells";

const renderTable = (dataset, tableId) => {
    const table = document.getElementById(tableId);
    try{
        table.removeChild(table.getElementsByTagName("tbody")[0]);
    }
    catch{}//if table already created delete it an then update
    
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
        cell.innerHTML = icons;
        
        row.appendChild(cell);

        tableBody.appendChild(row);
        i++;
    });

    table.append(tableBody);
}

let dataset = [
    {name: "Shop", created: "01/10/2022", category: "Task", content: "Buy milk before 04/10/2022", dates: "04/10/2022"},
    {name: "Shop", created: "01/10/2022", category: "Task", content: "Buy milk before 04/10/2022", dates: "04/10/2022"},
    {name: "Shop", created: "01/10/2022", category: "Task", content: "Buy milk before 04/10/2022", dates: "04/10/2022"},
    {name: "Shop", created: "01/10/2022", category: "Task", content: "Buy milk before 04/10/2022", dates: "04/10/2022"},
    {name: "Shop", created: "01/10/2022", category: "Task", content: "Buy milk before 04/10/2022", dates: "04/10/2022"},
    {name: "Shop", created: "01/10/2022", category: "Task", content: "Buy milk before 04/10/2022", dates: "04/10/2022"},
    {name: "Shop", created: "01/10/2022", category: "Task", content: "Buy milk before 04/10/2022", dates: "04/10/2022"},
];

export {renderTable, dataset};