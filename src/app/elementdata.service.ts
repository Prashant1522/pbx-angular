import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementdataService {
  firstClick() {
    return console.log('clicked');
  }
  constructor() { }
}
