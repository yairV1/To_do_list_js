// Constantes globales
const input = document.getElementById("todoinput");
const addBtn = document.getElementById("add-btn");
const toDoList = document.getElementById("cont-to-do-list");
const completedList = document.getElementById("cont-chet");

// Función para crear una nueva tarea
function createToDoItem(textoItem) {
    const item = document.createElement('div');
    item.classList.add('itm-to-do');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const p = document.createElement('p');
    p.textContent = textoItem;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="bi bi-x"></i>';

    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    return item;
}

// Agregar eventos a cada tarea
function iventsToItem(item) {
    const checkbox = item.querySelector("input");
    const deleteBtn = item.querySelector("button");

    // Mover entre listas
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            completedList.appendChild(item);
        } else {
            toDoList.appendChild(item);
        }
    });

    // Eliminar tarea
    deleteBtn.addEventListener("click", () => {
        item.remove();
    });
}

// Función para añadir nueva tarea
function addTask() {
    const textoItem = input.value.trim();
    if (textoItem === "") {
        alert("No se puede crear una tarea vacía");
    } else {
        const newItem = createToDoItem(textoItem);
        toDoList.appendChild(newItem);
        iventsToItem(newItem);
        input.value = "";
    }
}

// Click en el botón 
addBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    addTask();
});

// Enter en el input
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        addTask();
    }
});

// Botón de modo noche
const changeStyleBtn = document.getElementById("change-style");

changeStyleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Cambiar el texto del botón según el modo
    if (document.body.classList.contains("dark-mode")) {
        changeStyleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        changeStyleBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    }
});