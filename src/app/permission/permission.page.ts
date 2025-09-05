import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.page.html',
  styleUrls: ['./permission.page.scss'],
  standalone:false
})
export class PermissionPage implements OnInit {

constructor() { }

  ngOnInit() {
  }
  formData = {
    name: '',
    nameSecond: '',
    date: '',
    startTime: '',
    endTime: '',
    nightDuty: '',
    purposeToVisit: '',
    approverName: 'CHETTIAPPAN .V',
  };
}
