import { Component } from '@angular/core';

// Services
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Inject settingsService to run the loadSettings() from settingsService, every load the page
  constructor(public _setting: SettingsService) {

  }
}
