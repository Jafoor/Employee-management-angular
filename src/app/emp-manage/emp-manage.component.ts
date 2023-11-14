import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor( private _fb: FormBuilder) {
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
    if(this.empForm.valid) {
      console.log(this.empForm.value);
    }
  }
}
