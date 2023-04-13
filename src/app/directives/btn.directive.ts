import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective implements OnInit{

  @Input()
  bgColor = "red"

  @Input()
  textColor = "white"

  @Input()
  width = "2rem"

  constructor(private el: ElementRef<HTMLButtonElement>) { }

  ngOnInit(): void {
      this.setColor()
      this.setWidth()
  }

  setColor(){
    this.el.nativeElement.style.color = this.textColor
    this.el.nativeElement.style.backgroundColor = this.bgColor
    this.el.nativeElement.style.border = "none"
  }

  setWidth(){
    this.el.nativeElement.style.width = `${this.width}`
    this.el.nativeElement.style.padding = `0.3rem`
  }


}
