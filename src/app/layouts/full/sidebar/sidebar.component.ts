import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  ViewChild,
  HostListener,
  Directive,
  AfterViewInit,
  Renderer2,
  OnInit,
  Input
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [],
  animations: [
    trigger('subMenuAnimation', [
      // ...
      state('open', style({
        height: '45px',
        // opacity: 1,
        // backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '0',
        // opacity: 0.5,
        // backgroundColor: 'green'
      })),

      transition('* => *', [
        animate('0.5s')
      ]),
    ]),


  ],
})
export class AppSidebarComponent implements OnDestroy {
  @Input() isOpen;

  enteredButton = false;
  isMatMenuOpen = false;
  isMatMenu2Open = false;
  mobileQuery: MediaQueryList;
  logoDisplay: string = 'none';
  private _mobileQueryListener: () => void; NgZone
  state: string = 'connectivity';
  prevState: string = 'connectivity';
  prevButtonTrigger;
  menuStates = ['connectivity'];
  isSubMenuOpen = false;
  fIcon = 'chevron-right'
  stateChange(newState) {
    // console.log("i got "+newState);
    this.state = newState;
    /*console.log(this.menuStates.indexOf(newState));
  console.log(newState);*/
    if (this.menuStates.indexOf(this.state) == -1) {
      var element = document.getElementsByClassName("cdk-overlay-container")[0];
      // console.log(element);
      if (element != undefined)
        element.innerHTML = "";
    }
  }
  collapse() {
    // console.log(this.isOpen);
    this.isSubMenuOpen = false;
    this.logoDisplay = 'block';
    var elements = document.getElementsByClassName("toHide");
    [].forEach.call(elements, function (el) {
      el.style.display = "none";
    });
    var elements = document.getElementsByClassName("show");
    [].forEach.call(elements, function (el) {
      el.style.width = "inherit";
      el.style.fontSize = "36px";
      el.style.height = "36px";
    });
    document.getElementById("utiliko").style.font = "200 20px/24px 'RepublicaMinor2', sans-serif";
    var elements = document.getElementsByClassName("nav");
    [].forEach.call(elements, function (el) {
      el.style.padding = "0";
      el.classList.add('nav-small');
    });

    var elements = document.getElementsByClassName("sidebarIcon");
    [].forEach.call(elements, function (el) {
      el.style.width = "100%";
      el.style.marginRight = "0";
    });

    var x = document.querySelectorAll(".sidebarIcon svg");
    [].forEach.call(x, function (el) {
      el.style.height = "27px";
      el.style.width = "27px"
      el.style.margin = "auto";
      el.style.display = "block";
    });
    var elements = document.getElementsByClassName("btnwrap");
    [].forEach.call(elements, function (el) {
      el.style.display = "block";
    });
  }

  expand() {

    this.logoDisplay = 'none';
    var elements = document.getElementsByClassName("toHide");
    [].forEach.call(elements, function (el) {
      el.style.display = "block";
    });
    this.hideUnnecessaryArrows(); //should be called only after the toHide loop
    var elements = document.getElementsByClassName("show");
    [].forEach.call(elements, function (el) {

      el.style.fontSize = "30px";
      el.style.height = "30px";
    });

    document.getElementById("utiliko").style.font = "200 30px/24px 'RepublicaMinor2', sans-serif";
    var elements = document.getElementsByClassName("nav");
    [].forEach.call(elements, function (el) {
      el.style.padding = "0";
      el.classList.remove('nav-small');

    });

    var elements = document.getElementsByClassName("sidebarIcon");
    [].forEach.call(elements, function (el) {
      el.style.width = "initial";
    });

    var x = document.querySelectorAll(".sidebarIcon svg");
    [].forEach.call(x, function (el) {
      el.style.height = "18px";
      el.style.width = "18px";
      el.style.margin = "0 8px";

    });
    var elements = document.getElementsByClassName("btnwrap");
    [].forEach.call(elements, function (el) {
      el.style.display = "none";
    });
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private ren: Renderer2,
    // private zone:NgZone
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngAfterViewInit(): void {
    this.hideUnnecessaryArrows();
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  hostClickHandler(item: string) {
    alert(item);
  }

  /* following content is copied from 
  https://stackblitz.com/edit/mat-nested-menu-yclrmd?embed=1&file=app/nested-menu-example.html
  https://stackoverflow.com/questions/53618333/how-to-open-and-close-angular-mat-menu-on-hover/53618962#53618962
  */

  menuenter() {
    console.log("menuEnter works!");
    this.isMatMenuOpen = true;
    if (this.isMatMenu2Open) {
      this.isMatMenu2Open = false;
    }
  }

  menuLeave(trigger, button) {
    console.log("menuLeave works!");
    trigger.closeMenu();
        // console.log("closementu from buttonleave1");
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-mouse-focused');
        var elements = <HTMLElement>document.getElementsByClassName("cdk-overlay-container")[0];
        elements.style.display = 'none';
        elements.style.marginLeft = '0';
        setTimeout(() => {
        elements.style.display = 'block';
      }, 1000)
    /* setTimeout(() => {
      if (!this.isMatMenu2Open && !this.enteredButton) {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
        // console.log("closemenu from menuleave");
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenuOpen = false;
      }
    }, 80) */
  }

  menu2enter() {
    /* this.isMatMenu2Open = true; */
  }

  menu2Leave(trigger1, trigger2, button) {
    /* setTimeout(() => {
      if (this.isMatMenu2Open) {
        trigger1.closeMenu();
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        this.enteredButton = false;
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenu2Open = false;
        trigger2.closeMenu();
      }
    }, 100) */
  }

  buttonEnter(trigger, button, newState) {
    console.log("inside buttonEnter");
    console.log("this.menuStates.indexOf(newState) "+this.menuStates.indexOf(newState));
    if (this.menuStates.indexOf(newState) != -1) {
      setTimeout(() => {
        console.log("this.prevButtonTrigger && this.prevButtonTrigger != trigger "+(this.prevButtonTrigger && this.prevButtonTrigger != trigger));
        console.log("!this.isMatMenuOpen "+(!this.isMatMenuOpen));
        this.isMatMenuOpen = trigger.menuOpen;
        if (this.prevButtonTrigger && this.prevButtonTrigger != trigger) {
          this.prevButtonTrigger.closeMenu();

          this.prevButtonTrigger = trigger;
          this.isMatMenuOpen = false;
          this.isMatMenu2Open = false;
          trigger.openMenu();
          this.stateChange(newState);
          this.ren.addClass(button['_elementRef'].nativeElement, 'cdk-focused');
          this.ren.addClass(button['_elementRef'].nativeElement, 'cdk-mouse-focused');
          var elements = <HTMLElement>document.getElementsByClassName("cdk-overlay-container")[0];
          elements.style.marginLeft = '1.5vw';
        }
        else if (!this.isMatMenuOpen) {
          this.enteredButton = true;
          this.prevButtonTrigger = trigger
          trigger.openMenu();
          this.stateChange(newState);
          this.ren.addClass(button['_elementRef'].nativeElement, 'cdk-focused');
          this.ren.addClass(button['_elementRef'].nativeElement, 'cdk-mouse-focused');
          var elements = <HTMLElement>document.getElementsByClassName("cdk-overlay-container")[0];
          elements.style.marginLeft = '5.5vw';
          elements.style.display = 'block';
        }
        else {
          this.enteredButton = true;
          this.prevButtonTrigger = trigger
        }
      }, 100)
    }
    console.log("BE isMatMenuOpen",this.isMatMenuOpen);
  }

  buttonLeave(trigger, button) {

    setTimeout(() => {

      if (!this.isMatMenuOpen) {
        trigger.closeMenu();
        // console.log("closementu from buttonleave2");
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-mouse-focused');
        var elements = <HTMLElement>document.getElementsByClassName("cdk-overlay-container")[0];
        elements.style.display = 'none';
        elements.style.marginLeft = '0';
        setTimeout(() => {
        elements.style.display = 'block';
      }, 150)
      } else {
        this.enteredButton = false;
       
      }

    }, 100)
    console.log("BL isMatMenuOpen",this.isMatMenuOpen);

  }

  // my functions start from here
  showSubMenu(state) {
    // var element=<HTMLElement>document.querySelectorAll(".sub-menu."+state)[0];
    // console.log(this);
    if (this.prevState != state) {
      this.isSubMenuOpen = false;
      // console.log(this.isSubMenuOpen);
    }
    if (this.isSubMenuOpen == false && this.menuStates.indexOf(state) != -1 && this.isOpen == true) {
      this.isSubMenuOpen = true;
      this.changeArrowIcon(this, "rotate(90deg)");
      this.prevState = state;
      // console.log(this.isSubMenuOpen);
    }

    else {
      this.isSubMenuOpen = false;
      this.changeArrowIcon(this, "rotate(0deg)");
      // console.log(this.isSubMenuOpen);

    }

  }
  changeArrowIcon(thiss, rotate) {
    var elements = document.getElementsByClassName("btnwrap2");
    
    [].forEach.call(elements, function (el) {
    
      if (thiss.state == el.dataset.state) {
        (el.querySelector("svg")).style.transform = rotate;
        
      }
      else {
        (el.querySelector("svg")).style.transform = "rotate(0deg)";

      }
    });
  }
  hideUnnecessaryArrows() {
    var elements = document.getElementsByClassName("btnwrap2");
    /*  console.log("HI");
     console.log(elements);
     (<HTMLElement>elements[0]).style.display = "none"; */
    var m = this.menuStates;
    [].forEach.call(elements, function (el) {
      // console.log("hello");
      // console.log(el.dataset.state);
      // var menuStates = ['connectivity','support','accounting','hr','reports','utilities','survey'];
      if (m.indexOf(el.dataset.state) == -1) {
        el.style.display = "none";
      }
    });

  }
}
