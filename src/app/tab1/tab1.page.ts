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

  }
}
