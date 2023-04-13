import { BtnDirective } from './btn.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { ReactiveContainerComponent } from '../reactive/reactive-container/reactive-container.component';
import { By } from '@angular/platform-browser';

describe('BtnDirective', () => {

  let component: AppComponent 
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async ()=>{

    fixture = await TestBed.configureTestingModule({
      declarations: [AppComponent, BtnDirective, ReactiveContainerComponent]
    }).compileComponents()

  })

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it("Debe crear un button con BackgroundColor red, text color white and border none", ()=>{
    const element: HTMLDivElement = fixture.debugElement.query(By.directive(BtnDirective)).
    nativeElement;

    expect(element.style.backgroundColor).toEqual("red")
    expect(element.style.color).toEqual("white")
    expect(element.style.border).toEqual("none")

  })

  it("Debe crear un button con width 2rem", ()=>{
    const element: HTMLDivElement = fixture.debugElement.query(By.directive(BtnDirective)).
    nativeElement;

    expect(element.style.width).toEqual("2rem")
  })

});
