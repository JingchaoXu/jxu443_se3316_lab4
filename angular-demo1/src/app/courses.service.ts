import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
  courseArray :string[];

  constructor() { 
    this.courseArray= ["Course1","Course2", "Course3"];
  }
  getCourses() : string[]{
       return this.courseArray;
  }
  saveCourses(newCourse: string)
  {
    this.courseArray.push(newCourse);
  }

}
