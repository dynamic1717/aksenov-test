import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  selectedId!: number;
  post: any;
  title!: string;
  content!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    // Получение id из адресной строки (тип string)
    let id: any = this.route.snapshot.paramMap.get('id');
    // Присваеваем локальной переменной с типом number
    this.selectedId = +id;
    // Находим из сервиса запись с таким id
    this.post = this.postService.findPost(this.selectedId);
    // Присваиваем начальным значениям input параметры записи
    this.title = this.post.title;
    this.content = this.post.content;
  }

  // Обработка удаления записи
  onDeletePost() {
    if (confirm('Вы уверены, что хотите удалить эту запись?')) {
      // Вызваем сервис удаления записи и переходим на гл страницу
      this.postService.deletePost(this.selectedId);
      this.router.navigate(['/']);
    }
  }

  // Обработка редактирования записи
  onSubmit() {
    // Присваиваем записи измененные параметры из input
    this.post.title = this.title;
    this.post.content = this.content;
    // Вызываем сервис обновления записи
    this.postService.updatePost(this.post);
  }
}
