import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {EmpManagementService} from "../services/emp-management/emp-management.service";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-emp-manage',
  templateUrl: './emp-manage.component.html',
  styleUrls: ['./emp-manage.component.scss']
})
export class EmpManageComponent {

  empForm: FormGroup;

  education: string[] = [
    'SSC',
    'HSC',
    'Bsc',
    'Msc',
    'Bs'
  ]

  constructor( private _fb: FormBuilder, private _empService: EmpManagementService, private _dialogRef: DialogRef<EmpManageComponent>) {
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

  onSubmitForm() {
    if (this.empForm.valid) {
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Employee added Successfully.');
          this._dialogRef.close();
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }
}
