import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut-graphic',
  templateUrl: './doughnut-graphic.component.html',
  styles: []
})
export class DoughnutGraphicComponent implements OnInit {

    // Doughnut
    @Input() doughnutChartLabels: string[] = [];
    @Input() doughnutChartData: number[] = [];
    @Input() doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
