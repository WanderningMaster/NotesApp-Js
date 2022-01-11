import { renderTable, dataset } from '../render';

const del = (event) => {
    const note = event.target.parentElement.parentElement;
    try{
        const index = parseInt(note.className);
        dataset = dataset.filter((element, i) => index != i);
        renderTable(dataset, "table");
    }catch{
    }
}

const addEventToDelButtons = () => {
    const delButtons = document.querySelectorAll(".bi.bi-trash");
    delButtons.forEach(element => element.addEventListener('click', del, true));
}

export {addEventToDelButtons};