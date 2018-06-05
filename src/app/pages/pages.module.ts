import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

// Temporary
import { IncrementComponent } from '.././components/increment/increment.component';
import { DoughnutGraphicComponent } from '.././components/doughnut-graphic/doughnut-graphic.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component, 
    IncrementComponent,
    DoughnutGraphicComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule    
  ]
})

export class PagesModule { }