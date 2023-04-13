import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription, fromEvent } from "rxjs"
// import { Observable, filter, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css']
})
export class ReactiveContainerComponent implements OnInit, OnDestroy{
  
  Sub: Subscription | null = null

  x:number = 0;
  y:number = 0;

  ngOnInit() {
      const obs = fromEvent<MouseEvent>(
      document.getElementById("area")!,
      "mousemove"
      );

      this.Sub = obs.subscribe((ev)=>{
        this.x = ev.clientX;
        this.y = ev.clientY;
      })
  }

  ngOnDestroy(): void {
      this.Sub!.unsubscribe();
  }


  // miSubscription:any;

  // miintervalo: Observable<number> = interval(500).pipe(
  //   map(value => value+1),
  //   filter((value)=>value % 2 === 0),
  //   take(5)
  // )

  // constructor(){

  // }

  // ngOnInit(): void {
  //     this.miSubscription = this.miintervalo.subscribe({
  //       next : (value)=>console.log(value),
  //       complete: ()=>console.log("Estos son los primeros 5 pares")
  //     })
  // }

  // ngOnDestroy(): void {
  //     this.miSubscription!.unsubscribe();

  //     console.log("componente destruido")
  // }
}
