import { Component, Input, OnInit } from "@angular/core";
import { Location } from "../../types/location.interface";


@Component({
  selector: 'app-cards-list',
  //standalone: false,
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  @Input() unitsList: Location[] = [];

  constructor() { }

  ngOnInit(): void { }

}
