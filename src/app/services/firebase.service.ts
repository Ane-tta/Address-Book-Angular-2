import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Contacts } from '../Contacts';
import { Types } from '../Types';

@Injectable()
export class FirebaseService {
    contacts:FirebaseListObservable<Contacts[]>;
    types:FirebaseListObservable<Types[]>;
    
    constructor(private af: AngularFire){
    }
    
    getContacts(category:string = null){
        console.log(category);
        console.log(typeof category);
        if( category === 'null') {
            category = null;
        }
        if(category != null) {
            this.contacts = this.af.database.list('/items', {
                query: {
                    orderByChild: 'type',
                    equalTo: category
                }
            });
        } else {
            this.contacts = this.af.database.list('/items');
        }
        return this.contacts;
    }
    
    getCategories(){
        this.types = this.af.database.list('/types');
        return this.types;
    }
    
    addContact(newContact){
        return this.contacts.push(newContact);
    }
    
    updateContact(key, updContact){
        return this.contacts.update(key, updContact);
    }
    
    deleteContact(key){
        return this.contacts.remove(key);
    }
    
    /*getContacts(){
        this.contacts = this.af.database.list('/items') as FirebaseListObservable<Contacts[]>;
        console.log('+++');
        console.log(this.contacts);
        return this.contacts;
    }*/
}