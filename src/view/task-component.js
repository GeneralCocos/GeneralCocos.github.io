import { createElement } from '../framework/render.js';

function createTaskComponentTemplate(taskText, customClass) {
  return `
    <div class="card ${customClass}">
      <h1 class="task__text">${taskText}</h1>
    </div>`;
}

export default class TaskComponent {
  constructor(taskText, customClass) {
    this.taskText = taskText;
    this.customClass = `card__border__${customClass.split('__')[1]}`;  // Автоматически выбираем класс для задачи
  }

  getTemplate() {
    return createTaskComponentTemplate(this.taskText, this.customClass);
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
