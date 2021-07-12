import { Injectable } from '@angular/core';
import { POSTS } from '../db';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // Получение массива постов
  posts: Post[] = POSTS;

  constructor() {}

  // Добавление записи к массиву постов
  addPost(post: Post) {
    this.posts.push(post);
  }

  // Получения записи из массива по айди
  findPost(id: number) {
    return this.posts.find((item) => item.id === id);
  }

  // Удаление записи из массива
  deletePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
  }

  // Обновление записи в массиве
  updatePost(post: Post) {
    const finded = this.posts.findIndex((x) => x.id === post.id);
    this.posts[finded] = post;
  }
}
