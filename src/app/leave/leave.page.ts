import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
  standalone:false
})
export class LeavePage implements OnInit {

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
