import {Component, OnInit} from '@angular/core';
import {NbAuthService} from '@nebular/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user = {
    name : String,

  }

  constructor(private authService: NbAuthService) {
    this.authService.onTokenChange()
      .subscribe((token) => {
        //console.warn(token);
        //console.warn(token.getPayload());
        if (token.isValid()) {
          console.log(token);
        }
      });
  }

  ngOnInit(): void {
  }

}
