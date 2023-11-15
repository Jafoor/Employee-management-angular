import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EmpManageComponent} from "./emp-manage/emp-manage.component";
import {EmpManagementService} from "./services/emp-management/emp-management.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'employee-management';

  constructor(private _dialog: MatDialog, private _empService: EmpManagementService) {
  }

  ngOnInit() {
    this.getEmployeeList();
  }

  openAddEditEmpForm() {
    this._dialog.open(EmpManageComponent)
  }

  getEmployeeList() {
    this._empService.getEmployees().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
    }
    })
  }
}
