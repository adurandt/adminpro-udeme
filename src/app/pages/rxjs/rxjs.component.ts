import { Component, OnInit, OnDestroy } from '@angular/core';

// tslint:disable-next-line:import-blacklist
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  // Property to manipulate the subscription
  subscription: Subscription;

  constructor() {     

    // Subscribe to myObservable
    // Order Callbacks, 1 next, 2 error, 3 complete
    this.subscription = this.getObservable()
    .subscribe( 
      myNumber => console.log('Subs ', myNumber),
      error => console.error('Error ', error),
      () => console.log('El observador termino')
    );

  }

  ngOnInit() {
  }


  ngOnDestroy() {
    console.log('La página se va a cerrar');
    // Observable Unsubscribe 
    this.subscription.unsubscribe();
  }


  getObservable(): Observable<any> {
    // Observable
    // The observer is Observer type
    return new Observable( (observer: Subscriber<any>) => {
      // Counter
      let myCounter = 0;
      // Interval that emmite a vulue every second
      const myInterval = setInterval( () => {
        myCounter ++;
        // Test object
        const myTest = {
          value: myCounter
        };
        // The function next() notify a all subcriber the data(myCounter)
        observer.next(myTest);
        // Controling myCounter
        // if (myCounter === 3) {
        //   // Stop interval
        //   clearInterval(myInterval);
        //   // Notify to subscribers that is finish the observable
        //   observer.complete();
        // }
        
        // if (myCounter === 2) {
        //   // Stop interval
        //   clearInterval(myInterval);
        //   // Notify error
        //   observer.error('Auxilio!');
        // }

      }, 1000);
      // Pipe, map operator to transform the return data value
    }).pipe(
      map( data => data.value),
      // Filter operator, value = that return, index = number of notifications of the observer
      filter( (value, index) => {
        if ( (value % 2 === 1) ) {
          // non number
          return true;
        } else {
          // even number
          return false;
        }
      })
    );
  }

}
