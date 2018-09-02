import { Component } from '@angular/core';

// Animations import
import { transition,  trigger,  query,  style,  animate,  group,  animateChild } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
	trigger('myAnimation', [
	  transition('* => *', [
	    //animate(100, style({transform: 'translateX(100%)'}))
	    // css styles at start of transition
            style({ opacity: 0 }),
 
            // animation and styles at end of transition
            animate('0.900s', style({ opacity: 1 }))
	  ])
	])
  ] // register the animations
})
export class AppComponent {
  title = 'TFSDataTrends';

  getState(outlet) {
  	console.log(outlet.activatedRouteData.state);
    return outlet.activatedRouteData.state;
  }
}
