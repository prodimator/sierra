import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutTitle = "about";
  aboutBig = this.aboutTitle.substring(0,1);
  aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis semper dapibus. Integer lobortis faucibus dui, in molestie augue gravida in. Praesent molestie ante libero, et tristique urna bibendum vel. Suspendisse potenti. Sed tristique quam nec metus rutrum eleifend. Fusce sit amet ullamcorper dolor. Vivamus velit erat, viverra eget semper faucibus, feugiat nec risus. Nulla sodales ante nec justo efficitur malesuada. Donec rutrum gravida ligula at imperdiet. Phasellus convallis accumsan arcu, nec aliquam diam tempus at. Integer fermentum mattis dapibus. Donec elementum nisi quis venenatis fringilla. Pellentesque tempor magna diam, in porttitor ante vestibulum pharetra.";
  
  loremTitle = "lorem";
  loremBig = this.loremTitle.substring(0,1);
  loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis semper dapibus. Integer lobortis faucibus dui, in molestie augue gravida in. Praesent molestie ante libero, et tristique urna bibendum vel. Suspendisse potenti. Sed tristique quam nec metus rutrum eleifend. Fusce sit amet ullamcorper dolor. Vivamus velit erat, viverra eget semper faucibus, feugiat nec risus. Nulla sodales ante nec justo efficitur malesuada. Donec rutrum gravida ligula at imperdiet. Phasellus convallis accumsan arcu, nec aliquam diam tempus at. Integer fermentum mattis dapibus. Donec elementum nisi quis venenatis fringilla. Pellentesque tempor magna diam, in porttitor ante vestibulum pharetra.";
  
  ipsumTitle = "Fpsum";
  ipsumBig = this.ipsumTitle.substring(0,1);
  ipsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis semper dapibus. Integer lobortis faucibus dui, in molestie augue gravida in. Praesent molestie ante libero, et tristique urna bibendum vel. Suspendisse potenti. Sed tristique quam nec metus rutrum eleifend. Fusce sit amet ullamcorper dolor. Vivamus velit erat, viverra eget semper faucibus, feugiat nec risus. Nulla sodales ante nec justo efficitur malesuada. Donec rutrum gravida ligula at imperdiet. Phasellus convallis accumsan arcu, nec aliquam diam tempus at. Integer fermentum mattis dapibus. Donec elementum nisi quis venenatis fringilla. Pellentesque tempor magna diam, in porttitor ante vestibulum pharetra.";
  

  constructor() { }

  ngOnInit() {
  }

}
