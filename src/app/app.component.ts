import { Component } from '@angular/core';
import { observable, Observable, of, range, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <h2>
    consoldan arka planda nelerin çalıştığına bakarak
  </h2>
  <h3>
    rxjs kütüphanelerinin çalışmış olduğunu görebilirsiniz...
  </h3>
        ..
  `,
  styles: []
})
export class AppComponent {
  title = 'rxjs';
  constructor(){
    const array:Array<String>=['1. durum','2. durum'];
    const observable:Observable<String[]>=of(array);
    const obs1:Observable<number>=range(0,10);
    const subscription:Subscription=observable.subscribe(
      function (x) {
        console.log('Next: ' + x);
    },
    function () {
        console.log('Completed');
    }
    );
    obs1.subscribe({
      next:value=>{console.log('-> '+value)}    
    }
    );
    
  }
}
