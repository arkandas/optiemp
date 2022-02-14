import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  start = new Date(2021, 1, 21)
  end = new Date()

  randomDate(start: { getTime: () => number; }, end: { getTime: () => number; }) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  }

  users: any[] = [
    {
      id: 36818,
      name: 'Ash',
      creation: this.randomDate(this.start, this.end),
      purchases: 4,
      favorite: 'Pudgy Penguins',
      amount: 333.6
    },
    {
      id: 36818,
      name: 'Letisha',
      creation: this.randomDate(this.start, this.end),
      purchases: 6,
      favorite: 'Doodles',
      amount: 498.5
    },
    {
      id: 33726,
      name: 'Brad',
      creation: this.randomDate(this.start, this.end),
      purchases: 1,
      favorite: 'Pudgy Penguins',
      amount: 457.9
    },
    {
      id: 52293,
      name: 'Lucius',
      creation: this.randomDate(this.start, this.end),
      purchases: 3,
      favorite: 'Bored ape',
      amount: 328.4
    },
    {
      id: 43641,
      name: 'Lottie',
      creation: this.randomDate(this.start, this.end),
      purchases: 32,
      favorite: 'NBAYC',
      amount: 265.7
    },
    {
      id: 28353,
      name: 'Sheridan',
      creation: this.randomDate(this.start, this.end),
      purchases: 12,
      favorite: 'Pudgy Penguins',
      amount: 438.0
    },
    {
      id: 21371,
      name: 'Brad',
      creation: this.randomDate(this.start, this.end),
      purchases: 43,
      favorite: 'Doodles',
      amount: 333.7
    },
    {
      id: 8340,
      name: 'Georgia',
      creation: this.randomDate(this.start, this.end),
      purchases: 10,
      favorite: 'The meta kongz',
      amount: 229.8
    },
    {
      id: 59806,
      name: 'Jeana',
      creation: this.randomDate(this.start, this.end),
      purchases: 21,
      favorite: 'X-Consoles',
      amount: 543.2
    },
    {
      id: 79643,
      name: 'Desirae',
      creation: this.randomDate(this.start, this.end),
      purchases: 22,
      favorite: 'NBAYC',
      amount: 165.4
    }
  ];


  ngOnInit(): void {
  }


}
