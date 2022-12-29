import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Divcon2 } from 'src/app/common';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  public servicelist: Divcon2 = {
    image: '../assets/image/mobile.png',
    title: 'Application Management and Modernisation',
    description: `Here at Tagline, we provide the service of Application management and modernisation for the growth of
    your business. We update the old application with new approaches, including the latest languages,
    frameworks, and platforms.`,
    button: 'Learn More ->',
  };

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
