import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../authors';

@Component({
  selector: 'app-author-detail',
  template: `
    <div *ngIf="author">
      <strong>{{ author.firstName }} {{ author.lastName }}</strong>
      <button class="ml-[10px] text-red-500" (click)="select.emit(author)">
        Select
      </button>
      <button
        class="ml-[10px] text-yellow-500"
        (click)="delete.emit(author.id)"
      >
        Delete
      </button>
    </div>
  `,
  styles: [``],
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author | undefined;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}
}
