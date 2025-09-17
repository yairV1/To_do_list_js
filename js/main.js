// creamos las constantes globales
const input = document.getElementById("todoinput")
const addBtn = document.getElementById("add-btn")
const todoList = document.getElementById("cont-to-do-list")
const compleList = document.getElementById("cont-to-do-chet")
// creamos la funcion que nos permite crear una nueva tarea apartir del formulario
// Toda etiqueta que vamos a crear es apartir de la maqueta html pre existente
function createToDoItem(textoItem) {
    // Creamos el nodo o elemento padre
    const item = document.createElement('div')
        item.classList.add('itm-to-do')

    // cremoas el nodo hijo y le agregamos el type y el checkbox
    const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

    // Creamos el nodo hijo parrafo constante 'p' a este parrafo le adsino el valor del argumento de la función es decir lo que escribe el usuario en le campo
    const p = document.createElement('p')
        p.textContent = textoItem
    
    // Creamos el ultimo nodo hijo, el boton de eliminar
    const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = '<i class="bi bi-x"></i>'
    
    //Ensablamos en la funcion oadre sus nodos hijos es decir la estructura de la tarea 

    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    return item // Utilizamos el return para dar respueta, ya que lo usaremos mas adelante
}

// Detectamos el click con un evento escucha sobre el boton agregar "+" 
// Para apartir de este evento se agrege la tarea dentro del contenedor 

addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const textoItem = input.value.trim();
    if (textoItem === "") {
        alert("No se puede crear una tarea vacía");
    } else {
        const newItem = createToDoItem(textoItem);
        todoList.appendChild(newItem);
        input.value = "";
    }
});