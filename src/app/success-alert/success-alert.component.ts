import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
 
name : string='codemind';
serverid: number=37;
serverstatus: string='online';

// @Input() getUsername : string;
@Input() employee : any;
  ngOnInit() {
    console.log('from parent',this.employee);
    
  }

}
