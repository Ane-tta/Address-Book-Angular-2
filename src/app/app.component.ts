import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Contacts } from './Contacts';
import { Types } from './Types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
    contacts: Contacts[];
    types: Types[];
    appState: string;
    activeKey: string;
    isFavorite = false;
    
    activeName: string;
    activePhone: string;
    activeType: string;
    activeIsFav: boolean;
    
    constructor(private firebaseService: FirebaseService) {
    }
    
    ngOnInit(){
        this.firebaseService.getContacts().subscribe(contacts => {
            this.contacts = contacts;
        });
        
        this.firebaseService.getCategories().subscribe(types => {
            this.types = types;
        });
    }
    
    changeState(state, key){
        if(key) {
            this.activeKey = key;
        }
        this.appState = state;
    }
    
    filterCategory(category){
        this.firebaseService.getContacts(category).subscribe(contacts => {
            this.contacts = contacts;
        });
    }
    
    setFav(){
        this.isFavorite = !this.isFavorite;
    }
    
    addBusiness(name:string, phone:string, type:string, isFavorite:boolean){
        //var created_at = new Date().toString();
        
        var newContact = {
            name,
            phone,
            type,
            isFavorite
        };
        console.log(newContact);
        this.firebaseService.addContact(newContact);
        this.changeState('default');
    }
    
    showEdit(contact){
        this.changeState('edit', contact.$key);
        this.activeName = contact.name;
        this.activePhone = contact.phone;
        this.activeType = contact.type;
        this.activeIsFav = contact.isFavorite;
    }
    
    updateContact(){
        var updContact = {
            name:this.activeName,
            phone:this.activePhone,
            type:this.activeType,
            isFavorite:this.activeIsFav
        }
        this.firebaseService.updateContact(this.activeKey, updContact);
        this.changeState('default');
    }
    
    deleteContact(key){
        this.firebaseService.deleteContact(key);
        this.changeState('default');
    }
}
