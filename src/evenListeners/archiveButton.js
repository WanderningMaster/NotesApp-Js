// bi bi-archive-fill
import { renderTable, table, archive } from '../render';

const show = (event) => {
    const _table = document.getElementById("table");
    const caption = document.getElementsByTagName("caption")[0];
    console.log(caption);
    if(_table.dataset.name === "main"){
        _table.dataset.name = "archive";
        caption.innerText = "Archieved notes";
        renderTable(archive, "table");
        
    }
    else{
        _table.dataset.name = "main";
        caption.innerText = "Notes";
        renderTable(table, "table");
    }
}

const toarchive = (event) => {
    const note = event.target.parentElement.parentElement;
    const _table = document.getElementById("table");
    console.log(note.className);
        const index = parseInt(note.className);
        if(!isNaN(index)){
            if(_table.dataset.name === "main"){
                archive.push(table[index]);
                table = table.filter((element, i) => index != i);  
                renderTable(table, "table");
            }else{
                table.push(archive[index]);
                archive = archive.filter((element, i) => index != i);
                renderTable(archive, "table");    
            }
        }
        
        // console.log(dataset);
}

const addEventToArchiveButtons = () => {
    // console.log("archive");
    const arhiveButtons = document.querySelectorAll(".bi.bi-archive");
    arhiveButtons.forEach(element => element.addEventListener('click', toarchive, true));
}
const addEventToShowArchiveButton = () => {
    // console.log("show");
    const arhiveButton = document.querySelector(".bi.bi-archive-fill");
    arhiveButton.addEventListener('click', show, true);
}

export {addEventToArchiveButtons, addEventToShowArchiveButton};