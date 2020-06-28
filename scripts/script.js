const todos = [
  'Сделать проектную работу',
  'Погулять с собакой',
  'Позаниматься английским',
  'Прочитать статью',
  'Сходить на турники',
];
const todosList = document.querySelector('.todos__list');


function addToDo(text){
  const todo =
`<li class="todo">
      <p class="todo__text">
        ${text}
      </p>
      <button class="todo__btn todo__btn_type_edit">
        <svg width="24" height="23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.425 21.586H1.022V4.866h9.762V3.862H.018V22.59h19.41V12.17h-1.003v9.417z" fill="#fff"/><path d="M22.066 1.44l-.489-.486a3.26 3.26 0 00-4.608 0l-8.43 8.43v5.094h5.097l8.43-8.43a3.263 3.263 0 000-4.609zM13.22 13.486H9.538V9.806l7.175-7.179 3.682 3.682-7.176 7.178zm8.135-8.149l-.254.254-3.681-3.68.254-.255a2.256 2.256 0 013.186 0l.488.488a2.256 2.256 0 01.007 3.193z" fill="#fff"/></svg>
      </button>
      <button class="todo__btn todo__btn_type_duplicate">
        <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.007 12.274V3.732A3.717 3.717 0 0012.274 0H3.732A3.717 3.717 0 000 3.732v8.542a3.717 3.717 0 003.732 3.733h8.542a3.717 3.717 0 003.733-3.733zm-15.136 0V3.732A2.885 2.885 0 013.774.83h8.542a2.885 2.885 0 012.903 2.903v8.542a2.885 2.885 0 01-2.903 2.903H3.732c-1.576 0-2.903-1.285-2.861-2.902z" fill="#fff"/><path d="M12.026 24.3h8.542a3.717 3.717 0 003.732-3.732v-8.542a3.717 3.717 0 00-3.732-3.733h-1.244v.83h1.244a2.885 2.885 0 012.903 2.903v8.542a2.885 2.885 0 01-2.903 2.903h-8.542a2.885 2.885 0 01-2.903-2.903v-1.244h-.83v1.244c0 2.032 1.66 3.732 3.733 3.732z" fill="#fff"/></svg>
      </button>
      <button class="todo__btn todo__btn_type_delete">
        <svg width="18" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 16.264L16.264 0l.707.708L.707 16.97z"/><path fill="#fff" d="M1 0l16.263 16.263-.707.708L.293.707z"/></svg>
      </button>
    </li>`

  todosList.insertAdjacentHTML('afterbegin', todo);
}

todos.forEach(text => {
  addToDo(text);
})