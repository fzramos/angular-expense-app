import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// Checking for the response from the above BreakpointObserver from mobile layout
import { Observable } from 'rxjs';

// Check the Observable and filter the result passed back (for T F)
// shareReplay keeps checking if users screen is mobile/small
import {map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private BreakpointObserver: BreakpointObserver) { }

  // Creating a Varaible that will tell the application if we are inside 
  // of a mobile device
  isHandset$: Observable<boolean> = this.BreakpointObserver.observe([Breakpoints.Handset])
        .pipe(
          map(result => result.matches), shareReplay()
        )
  // observable is like an instance of a object/dict in py but we only
  // want the section of it that is a boolean
  // Question: Are you a mobile device?

  ngOnInit(): void {
  }

}
