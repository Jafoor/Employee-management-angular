import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EmpManageComponent} from "./emp-manage/emp-manage.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-management';

  constructor(private _dialog: MatDialog) {
  }

  openAddEditEmpForm() {
    this._dialog.open(EmpManageComponent)
  }
}
