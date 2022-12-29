import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headDataList!: string[];
  constructor() {}

  ngOnInit(): void {}

  logo: string = '../assets/image/tagline.png';
}
