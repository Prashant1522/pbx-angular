import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}
// subs: string = "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>";
const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'monitor'},
  { state: 'clients', name: 'Clients', type: 'link', icon: 'user' },
  { state: 'connectivity', name: 'Connectivity', type: 'link', icon: 'link' },
 
  { state: 'provisioner', name: 'Provisioner', type: 'link', icon: 'users' },
  { state: 'billing', name: 'Billing', type: 'link', icon:'users' },
  { state: 'reports', name: 'Reports', type: 'link', icon: 'trending-up' },
 
];

const connectivity = [
  { state: 'oRoute', name: 'Outbound Route', type: 'link', icon: 'home'},
 { state: 'tSettings', name: 'Trunk Settings', type: 'link', icon: 'home'}
];
const foo:any[] = [connectivity];
@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
  getSubMenuitem(subMenu): Menu[] {

    //  console.log("log "+subMenu);
    if(subMenu=='connectivity'){
      return foo[0];
    }
    else if(subMenu == 'support'){
      return foo[1];
    }
    else if(subMenu == 'accounting'){
      return foo[2];
    }
    else if(subMenu == 'hr'){
      return foo[3];
    }
    else if(subMenu == 'reports'){
      return foo[4];
    }
    else if(subMenu == 'utilities'){
      return foo[5];
    }
    else if(subMenu == 'survey'){
      return foo[6];
    }
    
    
  }
}
