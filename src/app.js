import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderTable, table, archive, countSummary } from './render';

window.onload = (() => {
    renderTable(table, "table");
    renderTable(countSummary(table, archive), "summary");
});

