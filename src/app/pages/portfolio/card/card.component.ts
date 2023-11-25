import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(
    private parametrizador: ActivatedRoute,
    private navegador:Router
    ) {

    //https://localhost:4200/portfolio/1?{name=thiago&token=123}
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )
    
    this.parametrizador.firstChild?.params.subscribe(
      res => console.log(res)
    )

    this.parametrizador.queryParams.subscribe(
      res => console.log(res)
    )
  }


  ngOnInit():void{
  //   setInterval(()=>{
  //     this.navegador.navigate(['/'])
  //   }, 5000)

   }

}
