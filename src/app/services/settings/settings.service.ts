import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  // default properties
  settings: Settings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  // Injection reference to objects document (DOM)
  constructor(@Inject(DOCUMENT) private _document) {
    // Call loadSettings() 
    this.loadSettings();
  }  

  // Convert string to JSON anad load in the setting property
  loadSettings() {
    // Verify if exist setting in the localStorage
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
      // console.log('Load from the localStorage');
    }      
    // } else {
    //   console.log('Using default values');
    // }
    // Apply theme 
    this.applyTheme(this.settings.theme);
  }

  // Aply theme
  applyTheme(theme: string) {
     // Change the theme in the index.html
    // url as html template
    const url = `assets/css/colors/${theme}.css`;
    // Get the link element from the index.html and change de href value
    this._document.getElementById('theme').setAttribute('href', url);
    
    // Assign and Save settings values to SettingsService
    this.settings.theme = theme;
    this.settings.themeUrl = url;
    // Save the settings
    this.saveSettings();

  }

  // Conver settings object to string and save in local storage
  saveSettings() {
    // console.log('Saved in the localStorage');
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

}


// To restrictions help in the settings
interface Settings {
  themeUrl: string;
  theme: string;
}
