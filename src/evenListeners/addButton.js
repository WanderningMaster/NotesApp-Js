import { renderTable, table, archive, countSummary} from '../render';
import { editMode } from './editButton'

const add = (event) => {
    const emptyNote = {name: "", created: "", category: "", content: "", dates: ""};
    table.push(emptyNote);
    renderTable(table, "table");
    renderTable(countSummary(table, archive), "summary");

    const note = document.getElementsByClassName((table.length-1).toString())[0];
    editMode(note);
}

const addEventToAddButton = () => {
    const addButton = document.querySelector(".btn.btn-primary");
    addButton.addEventListener('click', add, true);
}

export {addEventToAddButton};

