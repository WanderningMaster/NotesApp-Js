import {dropdown, currentTime} from '../cells';
import { renderTable, table, archive, countSummary } from '../render';

const save = (note) => {
    const date = note.getElementsByClassName('created')[0];
    const category = note.getElementsByClassName('category')[0];

    date.innerHTML = currentTime();

    const selectedCategory = category.firstChild.options[category.firstChild.selectedIndex].text;
    category.innerHTML = selectedCategory;

    const index = parseInt(note.className);
    const newNote = {};
    for(const key in table[index]){
        const field = note.getElementsByClassName(key)[0];
        newNote[key] = field.innerText;
    }
    table[index] = {...newNote};
    renderTable(table, "table");
    renderTable(countSummary(table, archive), "summary");
}

const edit = (event) => {
    let note = event.target.parentElement.parentElement;
    if(note.className === "icons"){
        note = note.parentElement;
    }
    if(note.contentEditable === "false"){
        editMode(note);
    }
    else{
        note.contentEditable = false;   
        save(note);
    }
}

const editMode = (note) => {
    const date = note.getElementsByClassName('created')[0];
    const category = note.getElementsByClassName('category')[0];
    const dates = note.getElementsByClassName('dates')[0];
    const icons = note.getElementsByClassName('icons')[0];

    date.contentEditable = false;
    category.contentEditable = false;
    dates.contentEditable = false;
    icons.contentEditable = false;

    note.contentEditable = true;
    
    category.innerHTML = dropdown;

    removeEventFromEditButtons();
    note.querySelector(".bi.bi-pencil").addEventListener('click', edit, true);
}

const addEventToEditButtons = () => {
    const editButtons = document.querySelectorAll(".bi.bi-pencil");
    editButtons.forEach(element => element.addEventListener('click', edit, true));
}
const removeEventFromEditButtons = () => {
    const editButtons = document.querySelectorAll(".bi.bi-pencil");
    editButtons.forEach(element => element.removeEventListener('click', edit, true));
}

export {addEventToEditButtons, editMode};