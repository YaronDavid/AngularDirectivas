import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { AreaMouseDirective } from './area-mouse.directive';
import { ReactiveContainerComponent } from '../reactive-container/reactive-container.component';

describe('ThemeDirective', () => {

  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async ()=>{

    fixture = await TestBed.configureTestingModule({
      declarations: [AppComponent, AreaMouseDirective, ReactiveContainerComponent]
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

  it("Debe crear un div con background-color blue", ()=>{
    const element: HTMLDivElement = fixture.debugElement.query(By.directive(AreaMouseDirective)).
    nativeElement;

    expect(element.style.backgroundColor).toEqual("blue")

  })
  it("Debe crear un div con height 500px", ()=>{
    const element: HTMLDivElement = fixture.debugElement.query(By.directive(AreaMouseDirective)).
    nativeElement;

    expect(element.style.height).toEqual("500px")

  })
});
