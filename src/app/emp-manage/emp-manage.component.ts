import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {EmpManagementService} from "../services/emp-management/emp-management.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-emp-manage',
  templateUrl: './emp-manage.component.html',
  styleUrls: ['./emp-manage.component.scss']
})
export class EmpManageComponent implements OnInit{

  empForm: FormGroup;

  education: string[] = [
    'SSC',
    'HSC',
    'Bsc',
    'Msc',
    'Bs'
  ]

  constructor( private _fb: FormBuilder, private _empService: EmpManagementService, private _dialogRef: MatDialogRef<EmpManageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      dob: '',
      education: '',
      company: '',
      experience: '',
      package: ''
    })
  }

  ngOnInit() {
    this.empForm.patchValue(this.data);
  }

  onSubmitForm() {
    console.log(this.empForm)
    if (this.empForm.valid) {

      if(this.data){
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee updated Successfully.');
            this._dialogRef.close(true);
          },
          error: (err) => {
            console.error(err);
          }
        });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee added Successfully.');
            this._dialogRef.close(true);
          },
          error: (err) => {
            console.error(err);
          }
        });
      }

    }
  }
}
