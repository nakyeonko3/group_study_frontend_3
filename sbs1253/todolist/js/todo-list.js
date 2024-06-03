const addBtn = document.querySelector('.todo__button--add');
const inputText = document.querySelector('.todo__input');
const items = document.querySelector('.todo__items');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputText.value.trim() !== '') {
    let todoText = inputText.value.trim();

    const li = document.createElement('li');
    li.className = 'todo__item';
    li.innerHTML = `
    <label class="todo__label">
      <input class="todo__checkbox" type="checkbox" />
      <span class="todo__check"></span>
      <span class="todo__text">${todoText}</span>
    </label>
    <button class="todo__button todo__button--delete">삭제</button>
  `;

    li.querySelector('.todo__button--delete').addEventListener('click', () => {
      li.remove();
    });

    items.prepend(li);
    inputText.value = '';
  }
});
const deleteBtn = document.querySelector('.todo__button--delete');

deleteBtn.addEventListener('click', (e) => {
  console.log(e.target);
  e.target.parentNode.remove();
});
