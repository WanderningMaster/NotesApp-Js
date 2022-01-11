import {dropdown, currentTime} from './cells';
import {renderTable, dataset} from './render';

const save = (note) => {
    const date = note.getElementsByClassName('created')[0];
    const category = note.getElementsByClassName('category')[0];

    date.innerHTML = currentTime();

    const selectedCategory = category.firstChild.options[category.firstChild.selectedIndex].text;
    category.innerHTML = selectedCategory;

    const index = parseInt(note.className);
    const newNote = {};
    for(const key in dataset[index]){
        const field = note.getElementsByClassName(key)[0];
        newNote[key] = field.innerText;
    }
    dataset[index] = {...newNote};
    renderTable(dataset, "table");
    addEventToEditButtons();
}

const edit = (event) => {
    const note = event.target.parentElement.parentElement;
    try{
        if(note.contentEditable === "false"){
        
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
            event.target.addEventListener('click', edit, true);
        }
        else{
            note.contentEditable = false;   
            save(note);
        }
    }catch{
    }
}

const addEventToEditButtons = () => {
    const editButtons = document.querySelectorAll(".bi.bi-pencil");
    editButtons.forEach(element => element.addEventListener('click', edit, true));
}

const removeEventFromEditButtons = () => {
    const editButtons = document.querySelectorAll(".bi.bi-pencil");
    editButtons.forEach(element => element.removeEventListener('click', edit, true));
}

export {addEventToEditButtons};
