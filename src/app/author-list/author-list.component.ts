import { Component, OnInit } from '@angular/core';
import { authors, Author } from '../authors';

@Component({
  selector: 'app-author-list',
  template: `
    <app-author-detail
      *ngFor="let author of authors"
      [author]="author"
      (select)="onSelected($event)"
      (delete)="onDeleted($event)"
    >
    </app-author-detail>
    <p class="text-[lightblue]">
      this is the current selected author
      <a class="text-[grey]"
        >{{ currentAuthor.firstName }} {{ currentAuthor.lastName }}</a
      >
    </p>
  `,
  styles: [``],
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  currentAuthor = authors[0];
  constructor() {}

  ngOnInit() {}

  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }

  onDeleted(id: number) {
    this.authors = this.authors.filter((author) => {
      return author.id !== id;
    });

    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
