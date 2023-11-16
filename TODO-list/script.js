// строгий режим
'use-strict';

const taskList = [
    {
        text: 'Some text',
        isDone: false
    },
]

const addBloockInput = document.querySelector('.add_block-input');
const addBloockBtn = document.querySelector('.add_block-btn');
const todoList = document.querySelector('.todo-field');

function render () {
    // обнуление
    todoList.innerHTML = '';

    // пробегсиь по массиву и примени
    taskList.forEach((elem, index) => {
        createItem(elem, index);
    })
}

function createItem(elem, index) {
    // Создание элемента (!но не добавления)
    const item = document.createElement('div');

    if(elem.isDone)
        item.className = 'todo-field__item_done';
    else
        item.className = 'todo-field__item';

    const input = document.createElement('input');
    input.className = 'todo-field__item-input';
    input.type = 'checkbox';
    input.checked = elem.isDone;
    // ? data Attribute
    input.setAttribute('data-number', index);
    // связывание 
    item.appendChild(input);
    
    const text = document.createElement('p');
    text.className = 'todo-field__item-text';
    text.innerHTML = elem.text;
    item.appendChild(text);

    const img = document.createElement('img');
    img.className = 'todo-field__item-img';
    img.alt = 'Delete';
    img.src = '/image/Vector.svg';
    item.appendChild(img);

    todoList.appendChild(item);
    // console.log(item);

    img.addEventListener('click', () => {
        taskList.splice(input.dataset.number, 1);
        render();
    })

    input.addEventListener('change', checkboxHandler);
}

function checkboxHandler(event) {
    taskList[event.target.dataset.number].isDone = event.target.checked;
    render();
}

addBloockBtn.addEventListener('click', (event) => {
    // Чтобы не перезагрузилась страница
    event.preventDefault();
    const text = addBloockInput.value;

    // Обрезка пробелов и при этом длина не пустая 
    if(text.trim().length) {
        taskList.push({text:text, isDone:false});
        render();
    }

    addBloockInput.value = '';
})

render();