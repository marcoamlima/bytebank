import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];

  transferir($event){
    const transferencia = {...$event, data: new Date()};
    console.log($event);
    this.transferencias.push(transferencia);
  }
}
