import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAreaMouse]'
})
export class AreaMouseDirective implements OnInit{

  @Input()
  color = "green"

  @Input()
  altura = "150"


  constructor( private el: ElementRef<HTMLDivElement>) { }

  ngOnInit(): void {
      this.setBackgroundColor()
      this.setHeight()
  }
  setBackgroundColor(){
    this.el.nativeElement.style.backgroundColor = this.color
  }
  setHeight(){
    this.el.nativeElement.style.height = `${this.altura}px`
  }
}
