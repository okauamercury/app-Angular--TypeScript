import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonBackButton, IonMenuButton, IonItem, IonDatetimeButton, IonModal, IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
  standalone: true,
  imports: [IonDatetime, IonModal, IonDatetimeButton, IonItem, IonBackButton, IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class ReservasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
