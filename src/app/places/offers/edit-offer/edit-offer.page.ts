import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  standalone: false,
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place?: Place;

  constructor(private route: ActivatedRoute, private navCtrl : NavController,  private placesService : PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
    this.place = this.placesService.places.find(p => p.id === paramMap.get('placeId'));
    });
  }

}
