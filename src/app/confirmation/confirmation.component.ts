import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(
    private FirebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.FirebaseService.databaselist('pruebaconfirmationurl').push({
      name: 'prueba exitosa'
    });
  }

}
