import data from './data.js';
import sortArr from './utils/sort.js';

const columnLoader = (parent) => {
    const columns = document.createElement('tr');
    const keys = Object.keys(data.flights[0]);
    keys.forEach(key => {
        if (key !== 'id') {
            const th = document.createElement('th');
            th.innerText = key;
            columns.append(th);
        }
    });
    parent.append(columns);
    columns.setAttribute('id', 'columns');
};

const dataLoader = (parent) => {
    data.flights.forEach(obj => {
        const rows = document.createElement('tr');
        const values = Object.values(obj);
        values.forEach((value, index) => {
            if (index !== 0) {
                const td = document.createElement('td');
                td.innerText = value;
                rows.append(td);
            }
        });
        parent.append(rows);
        rows.setAttribute('id', 'rows');
    });
};

const createTable = () => {
    const table = document.createElement('table');
    table.setAttribute('id', 'table');
    const section = document.getElementById('main');
    section.append(table);
};

const showHandler = () => {
    createTable();
    const table = document.getElementById('table');
    columnLoader(table);
    dataLoader(table);            
};

document.getElementById('show-btn').addEventListener('click', () => {
    if (!document.getElementById('table')) {
        showHandler();
    } else {
        document.getElementById('table').remove();
    }
});

document.getElementById('refresh-btn').addEventListener('click', () => {
    const table = document.getElementById('table');
    if (table) {
        table.remove(); 
    }
    const select = document.getElementById('departure-select').value;
    let flag = true;
    if (select === 'latest') {
        flag = false;
    }
    sortArr(data.flights, flag); 
    createTable(); 
    const newTable = document.getElementById('table');
    columnLoader(newTable); 
    dataLoader(newTable); 
});