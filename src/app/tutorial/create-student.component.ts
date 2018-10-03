import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddStudente, RemoveStudente, ModifyStudente } from './studente.actions';
import { IStudente } from './istudente.store';

@Component({
  selector: 'app-classe-studenti',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  constructor(private store: Store) { }

  addStudente(nome: string, cognome: string) {

    const insertIStudente: IStudente = {
      nome: nome,
      cognome: cognome,
      dataNascita: new Date()
    };

    this.store.dispatch(new AddStudente(insertIStudente));
  }

  removeStudente(cognome) {

    this.store.dispatch(new RemoveStudente(cognome));

  }

  modifyStudente(nomeStudente, cognomeStudente, cognomeMod: string) {

    const insertIStudente: IStudente = {
      nome: nomeStudente,
      cognome: cognomeStudente,
      dataNascita: new Date()
    };

    this.store.dispatch(new ModifyStudente(insertIStudente, cognomeMod));
  }

  ngOnInit() {
  }

}
