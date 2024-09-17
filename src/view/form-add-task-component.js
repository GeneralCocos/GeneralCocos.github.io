import {createElement} from '../framework/render.js';


function createFormAddTaskComponentTemplate() {
    return (
        `<form class="new-task">
            <div>
                <h2>Новая Задача</h2>
            </div>
            <div class="new-task__buttons">
                <input type="text" id="input_field" placeholder="Название задачи...">
                <button class="button">+ Добавить</button>
            </div>
        </form>`
      );
}


export default class FormAddTaskComponent {
  getTemplate() {
    return createFormAddTaskComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
