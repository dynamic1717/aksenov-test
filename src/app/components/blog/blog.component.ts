import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Post';
import { PostService } from 'src/app/services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];

  // Подключение сервисов
  constructor(private postService: PostService, private dialogRef: MatDialog) {}

  ngOnInit(): void {
    // Присваивание локальной переменной данных о постах из сервиса
    this.posts = this.postService.posts;
  }

  // Обработка открытия модального окна
  openDialog() {
    // Создаем ссылку на открытое окно
    const dialog = this.dialogRef.open(ModalComponent);
    // Отслеживаем внешнее событие onAddPost из модального окна
    dialog.componentInstance.onAddPost.subscribe((data) => {
      // Вызываем сервис добавления записи и закрываем окно
      this.postService.addPost(data);
      dialog.close();
    });
  }
}
