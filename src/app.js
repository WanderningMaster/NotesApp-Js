import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderTable, table } from './render';

window.onload = (() => {
    renderTable(table, "table");
});

