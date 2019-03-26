import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-call-button',
  templateUrl: './call-button.component.html',
  styleUrls: ['./call-button.component.css']
})
export class CallButtonComponent implements OnInit {
  dial:boolean = false;
  @ViewChild('dialinput') myDiv: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  /**
   * type
   */
  public type($evt) {
    console.log($evt);
    

    
    this.myDiv.nativeElement.value += $evt.srcElement.innerText;
    
  }
  public back($evt) {
    console.log($evt);
    

    
    this.myDiv.nativeElement.value = this.myDiv.nativeElement.value.slice(0,-1);
    
  }

}
