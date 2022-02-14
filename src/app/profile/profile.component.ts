import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  openModal: boolean = false;

  username: string = '';
  userEmail: string = '';
  fullName: string = '';
  role: string = ''
  address: string = '';
  phone: string = '';
  mobile: string = '';
  skill1 = {name: '', percentage: 0,};
  skill2 = {name: '', percentage: 0,};
  skill3 = {name: '', percentage: 0,};
  skill4 = {name: '', percentage: 0,};

  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {

    if (this.tokenStorageService.getUser().username === "admin") {
      this.username = "admin";
      this.userEmail = 'admin@arkandas.com';
      this.fullName = 'Admin Admin'
      this.role = 'Backend Developer';
      this.address = 'Test Street 123';
      this.phone = '(666) 666-666'
      this.mobile = '(777) 777-777'
      this.skill1.name = 'Web Development';
      this.skill1.percentage = 76;
      this.skill2.name = 'Web Design';
      this.skill2.percentage = 87;
      this.skill3.name = 'Diplomacy';
      this.skill3.percentage = 12;
      this.skill4.name = 'Backend API';
      this.skill4.percentage = 80;
    }
  }

  openMyModal() {
    this.openModal = true;
  }

}
