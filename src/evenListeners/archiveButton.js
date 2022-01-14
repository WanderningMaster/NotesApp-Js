import { renderTable, table, archive } from '../render';

const show = (event) => {
    const _table = document.getElementById("table");
    const caption = document.getElementsByTagName("caption")[0];
    console.log(caption);
    if(_table.dataset.name === "main"){
        _table.dataset.name = "archive";
        caption.innerText = "Archived notes";
        renderTable(archive, "table");
    }
    else{
        _table.dataset.name = "main";
        caption.innerText = "Notes";
        renderTable(table, "table");
    }
}

const toArchive = (event) => {
    let note = event.target.parentElement.parentElement;
    if(note.className === "icons"){
        note = note.parentElement;
    }
    const _table = document.getElementById("table");
    const index = parseInt(note.className);
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

const addEventToArchiveButtons = () => {
    const arhiveButtons = document.querySelectorAll(".bi.bi-archive");
    arhiveButtons.forEach(element => element.addEventListener('click', toArchive, true));
}
const addEventToShowArchiveButton = () => {
    const arhiveButton = document.querySelector(".bi.bi-archive-fill");
    arhiveButton.addEventListener('click', show, true);
}

export {addEventToArchiveButtons, addEventToShowArchiveButton};