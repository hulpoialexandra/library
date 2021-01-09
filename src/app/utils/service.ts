import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './Item';

@Injectable()
export class Service {

  constructor() { }
  //Create Users Locally for Demo

  public getItems(): Item[] {
    const items = [new Item("Sapiens - Yuval Noah Harari"),
    new Item("Homo deus - Yuval Noah Harari"),
    new Item("Hamlet - William Shakespeare"),
    new Item("Anna Karenina - Lev Tolstoi"),
    new Item("Jane Eyre - Charlotte Bronte"),
    new Item("In Search of Lost Time - Marcel Proust"),
    new Item("One Hundred Years of Solitude - Gabriel Garcia Marquez"),
    new Item("The Great Gatsby - F. Scott Fitzgerald"),
    new Item("The Odyssey - Homer"),
    new Item("The Red and the Black - Stendhal"),
    new Item("David Copperfield - Charles Dickens"),
    new Item("Les Misérables - Victor Hugo")
];
    return items;
  }


}