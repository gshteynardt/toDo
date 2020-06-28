const todos = [
  'Сделать проектную работу',
  'Погулять с собакой',
  'Позаниматься английским',
  'Прочитать статью',
  'Сходить на турники',
];
const todosList = document.querySelector('.todos__list');
const todosForm = document.querySelector('.todos__form');
const todoTemplate = document.querySelector('.todo-template');
const todosInput = todosForm.querySelector('.todos__input');


//получаем содержимое template и клонируем, выбираем todo__text и вставляем тест из массива, вставяляем копию каждой todo в начало todos__list
function addToDo(text){
  const todo = todoTemplate.content.cloneNode(true);
  todo.querySelector('.todo__text').textContent = text;

  todo.querySelector('.todo__btn_type_delete').addEventListener('click', deleteToDo);

  todosList.prepend(todo);
}

function deleteToDo(evt){
  const todo = evt.target.closest('.todo');
  todo.remove();
}

//при загрузки страницы элементы массива обрабатываются function addToDo()
todos.forEach(text => {
  addToDo(text);
})

todosForm.addEventListener('submit', evt => {
  evt.preventDefault();
  //const text равна, получаемому значению из input
  if(!todosInput.value) return;
  const text = todosInput.value;
  addToDo(text);
  todosInput.value = ''; //при добавлении todo input остается пустой
})



