import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'thor'];
  public removeHero?: string;


  deleteHeroe(): void {
this.removeHero = this.heroesNames.pop();
//  console.log({removeHero});

  }

}
