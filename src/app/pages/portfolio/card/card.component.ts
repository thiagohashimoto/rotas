import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private parametrizador: ActivatedRoute) {
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )
  }

}