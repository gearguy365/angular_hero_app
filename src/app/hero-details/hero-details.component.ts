import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';
import { ActivatedRoute } from '@angular/router';
import { placeholderHeroList } from '../mock/heroes';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  hero: Hero;

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      placeholderHeroList.forEach((hero: Hero) => {
        if (hero.id == id) {
          this.hero = hero;
        }
      })
   });
  }

}
