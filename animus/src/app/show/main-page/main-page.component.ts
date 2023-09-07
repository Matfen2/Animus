import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  consoles = [
    {
      id: 1,
      pict: '/assets/picts/ps5Logo.jpg'
    },
    {
      id: 2,
      pict: '/assets/picts/xboxSerieXLogo.jpg'
    },
    {
      id: 3,
      pict: '/assets/picts/nintendoSwitchLogo.jpg'
    }
  ]
}
