import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/Post';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  // Создаем внешнее событие добавления записи
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter();

  title!: string;
  content!: string;

  constructor() {}

  ngOnInit(): void {}

  // Обработка отправки формы
  onSubmit() {
    // Проверка на пустые строки
    if (!this.title || !this.content) {
      alert('Заполните пустые поля!');
      return;
    }
    // Создаем объект новой записи
    const newPost = {
      id: new Date().getTime(),
      title: this.title,
      content: this.content,
    };
    // Отправляем событие с данными новой записи
    this.onAddPost.emit(newPost);
  }
}
