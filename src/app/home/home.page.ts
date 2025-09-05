import { Component, OnInit ,Directive} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 currentUser = {
    name: 'John Doe',
    department: 'Engineering',
    employeeId: 'EMP001'
  };

  quickActions = [
    {
      title: 'Apply Permission',
      icon: 'time-outline',
      color: 'primary',
      route: '/permission'
    },
    {
      title: 'On Duty Request',
      icon: 'briefcase-outline',
      color: 'secondary',
      route: '/onduty'
    },
    {
      title: 'Leave Application',
      icon: 'calendar-outline',
      color: 'tertiary',
      route: '/leave'
    },
    {
      title: 'Emergency Leave',
      icon: 'alert-circle-outline',
      color: 'warning',
      route: '/emergencyleave'
    }
  ];

  recentActivities = [
    {
      title: 'Permission Request Approved',
      date: '2025-01-26',
      status: 'approved',
      type: 'Permission'
    },
    {
      title: 'Leave Application Pending',
      date: '2025-01-25',
      status: 'pending',
      type: 'Leave'
    }
  ];
}
