import { createElement } from '../framework/render.js';
import TaskListComponent from './task-list-component.js';

function createTaskBoardComponentTemplate() {
  return `
    <section class="taskboard">
      <div class="taskboard__inner section section__second"></div>
      <div class="delete">
        <div class="card card__delete"><h1>x Очистить</h1></div>
    </div>
    </section>`;
}

export default class TaskBoardComponent {
  constructor() {
    this.taskLists = [];
  }

  getTemplate() {
    return createTaskBoardComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
      this.renderTaskLists();
    }
    return this.element;
  }

  renderTaskLists() {
    const taskListsConfig = [
      { title: 'Бэклог', class: 'card__backlog' },
      { title: 'В процессе', class: 'card__process' },
      { title: 'Готово', class: 'card__ready' },
      { title: 'Корзина', class: 'card__trash' }
    ];

    const taskBoardInner = this.element.querySelector('.taskboard__inner');

    taskListsConfig.forEach(config => {
      const taskList = new TaskListComponent(config.title, config.class);
      taskBoardInner.appendChild(taskList.getElement());
    });
  }

  removeElement() {
    this.element = null;
  }
}
