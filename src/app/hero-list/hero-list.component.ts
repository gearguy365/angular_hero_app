import { Component, OnInit } from '@angular/core';
import { placeholderHeroList } from '../mock/heroes';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor() { }

  heroList: Hero[] = placeholderHeroList;
  selectedHero: Hero;

  ngOnInit() {
    this.selectedHero = this.heroList[0];
  }

  onHeroSelect(hero) {
    console.log(hero.name);
    this.selectedHero = hero;
  }

}
