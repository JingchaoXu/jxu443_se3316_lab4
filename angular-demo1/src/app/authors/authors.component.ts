import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorsService } from '../authors.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorsService],
  encapsulation: ViewEncapsulation.None
})
export class AuthorsComponent implements OnInit {
  title= "Title for the authors page";
  authors;
  constructor(authorService: AuthorsService) {
    this.authors=authorService.getAuthors();
    }

  ngOnInit() {
  }

}
