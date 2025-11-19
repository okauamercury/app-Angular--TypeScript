import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonList,  IonMenuButton, IonItem, IonDatetimeButton, IonModal, IonDatetime, IonCardHeader, IonCard, IonCardTitle,  IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
  standalone: true,
  imports: [ IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonDatetime, IonModal, IonDatetimeButton, IonItem, IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class ReservasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
