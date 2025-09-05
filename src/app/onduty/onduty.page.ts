import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onduty',
  templateUrl: './onduty.page.html',
  styleUrls: ['./onduty.page.scss'],
  standalone:false
})
export class OndutyPage implements OnInit {

formData = {
    name: '',
    nameSecond: '',
    date: '',
    destination: '',
    personToMeet: '',
    contactNumber: '',
    instructedBy: '',
    expectedTime: '',
    startTime: '',
    endTime: '',
    destinationType: '',
    officeDestination: '',
    nightDuty: '',
    purposeToVisit: '',
    approverName: 'CHETTIAPPAN .V',
  };

  hours: string[] = [];
  minutes: string[] = [];

  constructor() {}

  ngOnInit() {
    // Generate hours (00-23)
    for (let i = 0; i < 24; i++) {
      this.hours.push(i.toString().padStart(2, '0'));
    }

    // Generate minutes (00-59)
    for (let i = 0; i < 60; i++) {
      this.minutes.push(i.toString().padStart(2, '0'));
    }
  }

  onSubmit() {
    console.log('Form Data:', this.formData);
    // Handle form submission here
  }
}
