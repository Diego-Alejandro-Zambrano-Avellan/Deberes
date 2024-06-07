function addTask() {
   
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const status = 'No entregado';

    const table = document.getElementById('task-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

   
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
 
    cell6.innerHTML = `<button onclick="toggleStatus(this)">Marcar como Completado</button>`;

  
   
    cell1.innerHTML = title;
    cell2.innerHTML = description;
    cell3.innerHTML = dueDate;
    cell4.innerHTML = priority;
    cell5.innerHTML = status;

   
    document.getElementById('task-form').reset();

}
function toggleStatus(button) {
    const row = button.parentElement.parentElement;
    const statusCell = row.cells[4];

    if (statusCell.innerHTML === 'No entregado') {
        statusCell.innerHTML = 'Entregado';
        button.innerHTML = 'Marcar como Pendiente';
    } else {
        statusCell.innerHTML = 'No entregado';
        button.innerHTML = 'Marcar como Completado';
    }
}