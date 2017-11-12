import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }
  getCourses() : string[]{
       return ["Course1","Course2", "Course3"];
  }
  
  saveCourses(newCourse: string)
  {
    this.courses = this.getCourses();
    this.courses.push(newCourse);
    
  }

}
