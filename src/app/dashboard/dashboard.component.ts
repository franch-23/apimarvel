import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: any[]=[];

  constructor(private heroService: HeroService) { }
  
  ngOnInit(): void {
    this.getHeroes();
    
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe( res => {
      console.log(res);
      this.heroes=res.data.results;
       
    });
  }
 
}


