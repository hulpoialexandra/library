import { Component } from '@angular/core';
import { IonItem } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Item } from '../utils/Item';
import { Service } from '../utils/service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  list:Item[];
  server:Service;

  constructor() {}

  ngOnInit(){
    this.server=new Service();
    this.list=this.server.getItems();
    this.list.forEach(e=>{
      var item=document.createElement('ion-item');
      var label=document.createElement('ion-label');
      label.innerHTML=e.text;
      item.appendChild(label);

      var buttons=document.createElement('ion-buttons');
      buttons.slot='end';

      var btnFav=document.createElement('ion-button');
      var fav=document.createElement('ion-icon');
      fav.name='heart';
      btnFav.appendChild(fav);
      buttons.appendChild(btnFav)

      var btnCart=document.createElement('ion-button');
      var cart=document.createElement('ion-icon');
      cart.name='cart';
      btnCart.appendChild(cart);
      buttons.appendChild(btnCart)

      item.appendChild(buttons);
      document.getElementById('list').appendChild(item);
    })
  }
}
