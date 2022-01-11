import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderTable, dataset } from './render';

window.onload = (() => {
    renderTable(dataset, "table");
});

