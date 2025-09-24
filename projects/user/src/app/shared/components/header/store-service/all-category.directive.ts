import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAllCategory]'
})
export class AllCategoryDirective{
  @Input('show') show:boolean =false;
  @HostBinding('style.backgroundColor') backgroundColor!:string;
  @HostBinding('style.color') color!:string;
  constructor() {  }

  @HostListener('click') click() {
    if (!this.show) {
      this.backgroundColor= '#FA8232';
      this.color= 'white';
    } else {
      this.backgroundColor= '#F2F4F5';
      this.color= '#191C1F';
    }
  }
}
