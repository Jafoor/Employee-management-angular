import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-manage',
  templateUrl: './emp-manage.component.html',
  styleUrls: ['./emp-manage.component.scss']
})
export class EmpManageComponent {
  education: string[] = [
    'SSC',
    'HSC',
    'Bsc',
    'Msc',
    'Bs'
  ]
}
