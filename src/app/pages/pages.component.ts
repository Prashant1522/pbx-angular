import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements AfterViewInit {
  ngAfterViewInit() {
    
  }
  ngAfterContentInit(){
    var elements = document.getElementsByClassName("nav");
    console.log("pages cdk found");
    console.log(elements);
    [].forEach.call(elements, function (el) {
      el.style.padding = "0";
      el.classList.add('nav-small');
    });
  }
}
