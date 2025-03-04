import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  standalone: false,
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place?: Place;

  constructor(private route : ActivatedRoute, private placesService : PlacesService, private navCtrl : NavController) { }

  ngOnInit() {
    setTimeout(() => {
      document.querySelector('app-discover')?.removeAttribute('aria-hidden');
    }, 500);

    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
    this.place = this.placesService.places.find(p => p.id === paramMap.get('placeId'));
    }); 
  }

  onBookPlace() {
    //this.router.navigateByUrl('/places/tabs/discover');
    this.navCtrl.navigateBack('/places/tabs/discover');
  }

}
