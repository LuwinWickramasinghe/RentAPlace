import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-detail',
  standalone: false,
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      document.querySelector('app-discover')?.removeAttribute('aria-hidden');
    }, 500);
  }

}
