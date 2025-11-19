import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, IonItem, IonList, IonLabel,  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonDatetime } from '@ionic/angular/standalone';
import{IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: true,
  imports: [IonicModule, IonDatetime, IonCardContent, IonCardTitle, IonCardHeader, IonCard,  IonLabel, IonList, IonItem, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class CalendarioPage implements OnInit {
  constructor() { }
//  classe em type
  dataSelecionada: string = '';
  listaDatas: Date[] = [];

  // Função para adicionar a data seleciona à lista
  adicionarData(){
    if(this.dataSelecionada){
      const nova = new Date(this.dataSelecionada)
      const existe = this.listaDatas.some(
        d => d.toDateString() === nova.toDateString()
        
      );
      if(!existe) this.listaDatas.push(nova);
      console.log(nova);
    }
  }
  removerData(i:number){
    this.listaDatas.splice(i, 1);
  }

  ngOnInit() {
  }

}
