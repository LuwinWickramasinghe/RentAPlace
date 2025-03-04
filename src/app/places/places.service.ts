import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Amazing Burger Joint',
      'Delicious burgers, fries, and a delicious dessert.',
      'https://cdn5.tropicalsky.co.uk/images/800x600/maldives-getty-image-infinity-pool.jpg',
      15.99
    ),
    new Place(
      'p2',
      'The Rusty Anchor',
      'Stunning beachfront cottage with views of the ocean.',
      'https://www.visafirst.com/blog/wp-content/uploads/2022/07/Positano-Amalfi-Coast-Italy.jpg',
      149.99
    ),
    new Place(
      'p3',
      'the holiday resort',
      'Luxurious villas, spa, and wellness retreat.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjDv_x7MXfKQhXHXiw4tUDLZmaxEylDf4qyw&s',
      499.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(place => place.id === id) };
  }
}
