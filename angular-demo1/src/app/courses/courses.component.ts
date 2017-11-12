import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoursesService } from '../courses.service';
import {AutoGrowDirective} from '../auto-grow.directive';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService],
  encapsulation: ViewEncapsulation.None
})
export class CoursesComponent implements OnInit {
  title = "The title of courses page";
  courses;

  constructor(private courseService: CoursesService) {
    this.courses=courseService.getCourses();
  }
  
  AddCourse(newCourse: string){
   this.courseService.saveCourses(newCourse);
   this.courses = this.courseService.getCourses();
  }

  ngOnInit() {
  }

}
