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
const btnSubmit = todosForm.querySelector('.button_type_submit');
//ниже присвоили переменной значение, получаемое при target = todo;
let editedTodo = null;


//получаем содержимое template и клонируем, выбираем todo__text и вставляем тест из массива, вставяляем копию каждой todo в начало todos__list
//в момент создания вешаем addEventListener но btn
function addToDo(text){
  const todo = todoTemplate.content.cloneNode(true);

  todo.querySelector('.todo__text').textContent = text;
//мы хотим в момент создания повесить эти события
  addToDolisteners(todo);

  todosList.prepend(todo);
}

//создаем function, в которую добавляем listeners
function addToDolisteners(todo){
  todo.querySelector('.todo__btn_type_delete').addEventListener('click', deleteToDo);
  todo.querySelector('.todo__btn_type_edit').addEventListener('click', editToDo);
  todo.querySelector('.todo__btn_type_duplicate').addEventListener('click', duplicateTodo);
}

//при загрузки страницы элементы массива обрабатываются function addToDo()
todos.forEach(text => {
  addToDo(text);
})

//удаление todo
function deleteToDo(evt){
  const todo = evt.target.closest('.todo');
  todo.remove();
}

//редактируем todo
function editToDo(evt){
  //получаем todo, на которой произошло событие методом closest
  const todo = evt.target.closest('.todo');
  //переменной editorTodo присваиваем значение = элементу, получаемому при событии
  editedTodo = todo;
  setToDoToForm(todo);
}

//создаем копию todo
function duplicateTodo(evt){
  const todo = evt.target.closest('.todo');
  const newTodo = todo.cloneNode(true);
  addToDolisteners(newTodo);

  todo.after(newTodo);
}
//получаем значение в форму
function setToDoToForm(todo){
  //получаем тест, который хотим изменить
  const text = todo.querySelector('.todo__text').textContent;
  todosInput.value = text;
  btnSubmit.textContent = 'Сохранить';
}

function resetTodoForm(){
  editedTodo = null;
  todosInput.value = '';
  btnSubmit.textContent = 'Добавить';
}

//обработчик
function handlerToDoFormSubmit(evt){
  evt.preventDefault();

//const text равна, получаемому значению из input
  const text = todosInput.value;
  if(editedTodo){
    editedTodo.querySelector('.todo__text').textContent = text;
  }else{
    addToDo(text);
  }
  resetTodoForm();
}


todosForm.addEventListener('submit', handlerToDoFormSubmit)




