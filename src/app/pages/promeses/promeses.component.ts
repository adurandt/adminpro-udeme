import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-promeses",
  templateUrl: "./promeses.component.html",
  styles: []
})
export class PromesesComponent implements OnInit {
  constructor() {

    // Call promise option 1
    // promise.then(
    //   () => console.log('Termino!!!'), 
    //   () => console.log('Error')
    // );

    // Call promise option 2
    this.counterThree().then(
      message => console.log('Termino ', message )      
    )
    .catch(
      error => console.error('Error en la promesa ', error)
    );

  }

  ngOnInit() {}

  // function that return a promise
  counterThree(): Promise<boolean> {
    return  new Promise((resolve, reject) => {
      // Counter
      let myCount = 0;
      // Interval fire every 1 second
      let myInterval = setInterval(() => {
        myCount += 1;
        console.log(myCount);
        if (myCount === 3) {
          // send reject(error_description)
          // reject('Simplemente un error');
          // or send resolve(value to promise return)
          resolve(true);
          clearInterval(myInterval);
        }
      }, 1000);
    });
  }
}
