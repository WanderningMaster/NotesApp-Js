import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderTable, table, archive } from './render';

window.onload = (() => {
    renderTable(table, "table");
    // renderTable(archive, "archive");
});

