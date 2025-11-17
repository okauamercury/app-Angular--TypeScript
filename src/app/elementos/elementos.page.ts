import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonList, IonItem, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonThumbnail, IonLabel, IonGrid, IonRow, IonCol, IonImg, IonAvatar, IonDatetime, IonFooter, IonDatetimeButton, IonModal } from '@ionic/angular/standalone';


@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.page.html',
  styleUrls: ['./elementos.page.scss'],
  standalone: true,
  imports: [IonModal, IonDatetimeButton, IonFooter, IonDatetime, IonAvatar, IonImg,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonBackButton,
    IonButtons,
    IonList,
    IonItem,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonThumbnail,
    IonLabel]
})
export class ElementosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
