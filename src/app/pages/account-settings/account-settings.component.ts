import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  // Injection reference to all document (DOM)
  constructor(public _settings: SettingsService) { }

  ngOnInit() {
    this.placeCheck();
  }
  

  // To change theme
  changeTheme(theme: string, link: any) {
    // Call the applyCheck() 
    this.applyCheck(link);
    // Apply theme
    this._settings.applyTheme(theme);

  }

  // display (check character) in the selected element
  applyCheck(link: any) {
    // Array of all DOM element whit 'selector' class
    const selectors: any = document.getElementsByClassName('selector');
    // Remove the working class of link element
    for (const ref of selectors) {
      ref.classList.remove('working');
    }
    // Add workin class to link element
    link.classList.add('working');

  }

   // Place (check character) in the selected element, when load page 
   placeCheck() {
    // Array of all DOM element whit 'selector' class
    const selectors: any = document.getElementsByClassName('selector');
    // current theme
    const theme = this._settings.settings.theme;

    // Apply the working class of html element
    for (const ref of selectors) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');        
        break;
      }
    }  

  }

}
