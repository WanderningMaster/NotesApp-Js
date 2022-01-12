import { renderTable, table } from '../render';

const del = (event) => {
    const note = event.target.parentElement.parentElement;
    try{
        const index = parseInt(note.className);
        table = table.filter((element, i) => index != i);
        renderTable(table.filter(element => !element.archieved), "table");
    }catch{
    }
}

const addEventToDelButtons = () => {
    const delButtons = document.querySelectorAll(".bi.bi-trash");
    delButtons.forEach(element => element.addEventListener('click', del, true));
}

export {addEventToDelButtons};