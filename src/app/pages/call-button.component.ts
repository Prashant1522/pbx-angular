import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-button',
  templateUrl: './call-button.component.html',
  styleUrls: ['./call-button.component.css']
})
export class CallButtonComponent implements OnInit {
  dial:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
