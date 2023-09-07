import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-console-page',
  templateUrl: './show-console-page.component.html',
  styleUrls: ['./show-console-page.component.css'],
})
export class ShowConsolePageComponent implements OnInit {
  worldId!: number;
  worldDetails: any;

  worldData = [
    {
      id: 1,
      firstConsole: '/assets/picts/ps5ConsoleOne.jpg',
      secondConsole: '/assets/picts/ps5ConsoleTwo.jpg',
      features: '',
      firstPositif: '',
      secondPositif: '',
      thirdPositif: '',
      firstGame: '/assets/picts/ps5GameOne.jpg',
      secondGame: '/assets/picts/ps5GameTwo.png',
      thirdGame: '/assets/picts/ps5GameThree.png',
      fourGame: '/assets/picts/ps5GameFour.jpg',
    },
    {
      id: 2,
      firstConsole: '/assets/picts/xboxSerieXConsoleOne.png',
      secondConsole: '/assets/picts/xboxSerieXConsoleTwo.png',
      features: '',
      firstPositif: '',
      secondPositif: '',
      thirdPositif: '',
      firstGame: '/assets/picts/xboxSerieXGameOne.jpg',
      secondGame: '/assets/picts/xboxSerieXConsoleTwo.png',
      thirdGame: '/assets/picts/xboxSerieXGameThree.jpg',
      fourGame: '/assets/picts/xboxSerieXGameFour.jpg',
    },
    {
      id: 3,
      firstConsole: '/assets/picts/nintendoConsoleOne.png',
      secondConsole: '/assets/picts/nintendoConsoleOne.png',
      features: '',
      firstPositif: '',
      secondPositif: '',
      thirdPositif: '',
      firstGame: '/assets/picts/nintendoGameOne.png',
      secondGame: '/assets/picts/nintendoGameTwo.png',
      thirdGame: '/assets/picts/nintendoGameThree.png',
      fourGame: '/assets/picts/nintendoGameFour.png',
    },
  ];

  constructor (private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.worldId =+ params['id'];
      this.worldDetails = this.worldData.find((console) => console.id === this.worldId)
    })
  }
}
