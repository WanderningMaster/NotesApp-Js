import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderTable, dataset } from './render';
import { addEventToEditButtons } from './tableAPI';


window.onload = (() => {
    renderTable(dataset, "table");
    addEventToEditButtons();
});

