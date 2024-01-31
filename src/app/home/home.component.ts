import { Component, OnInit } from '@angular/core';
import { CurdService } from '../curd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private _curd: CurdService) {}

  newUsername: string = '';
  names!: string[];

  ngOnInit(): void {
    this.names = this._curd.names;
  }

  addNewName() {
    if(this.newUsername === '') return

    this._curd.names.push(this.newUsername);
    this.newUsername = ''
  }

  deleteName(index: number) {
    this._curd.names.splice(index, 1)
  }
}
