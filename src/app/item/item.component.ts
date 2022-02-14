import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  isClosed: boolean = true;
  quantity: number = 0;
  totalAmount: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  showAlert() {
    this.quantity = this.quantity + 1;
    this.totalAmount = this.totalAmount + 19.99;
    this.isClosed = false;
  }
}
