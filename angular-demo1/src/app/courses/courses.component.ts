import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CoursesComponent implements OnInit {
  title = "The title of courses page";

  constructor() { }

  ngOnInit() {
  }

}
