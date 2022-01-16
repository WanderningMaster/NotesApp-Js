import { renderTable, table, archive, countSummary } from '../render';

const del = (event) => {
    let note = event.target.parentElement.parentElement;
    if(note.className === "icons"){
        note = note.parentElement;
    }
    const index = parseInt(note.className);
    table = table.filter((element, i) => index != i);
    renderTable(table.filter(element => !element.archieved), "table");
    renderTable(countSummary(table, archive), "summary");
}

const addEventToDelButtons = () => {
    const delButtons = document.querySelectorAll(".bi.bi-trash");
    delButtons.forEach(element => element.addEventListener('click', del, true));
}

export {addEventToDelButtons};