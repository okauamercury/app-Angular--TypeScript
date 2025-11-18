import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonBackButton, IonMenuButton, IonItem, IonDatetimeButton, IonModal, IonDatetime, IonCardHeader, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonCheckbox } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
  standalone: true,
  imports: [IonCheckbox, IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonCardHeader, IonDatetime, IonModal, IonDatetimeButton, IonItem, IonBackButton, IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class ReservasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
