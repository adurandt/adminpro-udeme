import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  // To reference a HTML element (#txtProgress)
  @ViewChild('txtProgress') txtProgress: ElementRef;  
  // Value to print like leyend in the personal component (increment.component)
  @Input('attTitle') title: string = 'Título';
  // General value
  @Input() progress: number = 50;
  // Value to send father component (progress.component) to update the progress bar
  @Output() updateValue: EventEmitter<number> = new EventEmitter();


  constructor() {}

  ngOnInit() {}

  //  -, + buttons
  changeValue(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }

    this.progress += value;
    
    // To update progress bar 
    this.updateValue.emit(this.progress);
    // Get focus to HTML Element
    this.txtProgress.nativeElement.focus();

  }


  // Input number event listener
  onChange(newValue: number) {
    
    // Get element (javascrip vanilla)
    // const elemHTML: any = document.getElementsByName('progress')[0];
    
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    // Prevent different values in the input text
    // elemHTML.value =  this.progress;
        
    // Set new value to element by ElementRef object (txtProgress)
    this.txtProgress.nativeElement.value =  this.progress;

    // To update progress bar    
    this.updateValue.emit(this.progress);
    
  }
}
