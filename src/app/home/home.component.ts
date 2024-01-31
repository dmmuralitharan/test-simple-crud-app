import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private _crud: CrudService) {}

  newUsername: string = '';
  names!: string[];

  ngOnInit(): void {
    this.names = this._crud.names;
  }

  addNewName() {
    if(this.newUsername === '') return

    this._crud.names.push(this.newUsername);
    this.newUsername = ''
  }

  deleteName(index: number) {
    this._crud.names.splice(index, 1)
  }
}
