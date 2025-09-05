import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergencyleave',
  templateUrl: './emergencyleave.page.html',
  styleUrls: ['./emergencyleave.page.scss'],
  standalone: false
})
export class EmergencyleavePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  formData = {
    name: '',
    nameSecond: '',
    fromDate: '',
    toDate: '',
    totalDays: '',
    reason: '',
    approverName: 'CHETTIAPPAN .V',
  };
 
}
