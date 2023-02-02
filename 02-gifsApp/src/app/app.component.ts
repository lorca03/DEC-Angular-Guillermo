import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAhIO9m8RohtWg1yNQY44oQYxQGSpGKVNU",
  authDomain: "fir-e2b74.firebaseapp.com",
    })
  }
  title = 'gifsApp';
}
