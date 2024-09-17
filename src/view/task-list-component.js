import { createElement } from '../framework/render.js';
import TaskComponent from './task-component.js';

function createTaskListComponentTemplate(title, customClass) {
  return `
    <div class="cell">
      <div class="card card__header ${customClass}">
        <h2 class="task-list__title">${title}</h2>
      </div>
      <div class="cell task-list__tasks"></div>
    </div>`;
}

export default class TaskListComponent {
  constructor(title, customClass) {
    this.title = title;
    this.customClass = customClass;
    this.tasks = this.getTasksByTitle(title);  // Получаем задачи по заголовку списка
  }

  getTasksByTitle(title) {
    switch (title) {
      case 'Бэклог':
        return ['Выучить JS', 'Выучить React', 'Сделать домашку'];
      case 'В процессе':
        return ['Выпить смузи', 'Попить воды'];
      case 'Готово':
        return ['Позвонить маме', 'Погладить кота'];
      case 'Корзина':
        return ['Сходить погулять', 'Прочитать Войну и Мир'];
      default:
        return [];
    }
  }

  getTemplate() {
    return createTaskListComponentTemplate(this.title, this.customClass);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
      this.renderTasks();
    }
    return this.element;
  }

  renderTasks() {
    const taskListContainer = this.element.querySelector('.task-list__tasks');
    this.tasks.forEach(taskText => {
      const task = new TaskComponent(taskText, this.customClass);
      taskListContainer.appendChild(task.getElement());
    });
  }

  removeElement() {
    this.element = null;
  }
}
