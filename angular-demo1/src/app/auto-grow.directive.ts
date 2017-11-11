import { Directive, ElementRrf, Renderer } from '@angular/core';

@Directive({
  selector: '[appAutoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})
export class AutoGrowDirective {

  constructor(private el: ElementRrf, private renderer: Renderer) {
    
    
  }
  onFocus(){
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
  }
  
  onBlur(){
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '150px');
  }
  

}
