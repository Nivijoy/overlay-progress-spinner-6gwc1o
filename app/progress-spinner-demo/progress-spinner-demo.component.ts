import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner-demo',
  templateUrl: './progress-spinner-demo.component.html',
  styleUrls: ['./progress-spinner-demo.component.css'],
})
export class ProgressSpinnerDemoComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 25;
  displayProgressSpinner = false;
  spinnerWithoutBackdrop = false;
  diameter = 20;
  strokeWidth = 50;
  // Display progress spinner for 3 secs on click of button
  ngOnInit() {
    this.showProgressSpinner();
  }
  showProgressSpinner = () => {
    this.displayProgressSpinner = true;
    setTimeout(() => {
      this.displayProgressSpinner = false;
    }, 3000);
  };
  showSpinnerWithoutBackdrop = () => {
    this.spinnerWithoutBackdrop = true;
    setTimeout(() => {
      this.spinnerWithoutBackdrop = false;
    }, 3000);
  };
}
