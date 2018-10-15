import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  gender = 'male';
  email = '';
  fullName = '';
  phoneNumber = '';
  constructor() { }

  ngOnInit() {
  }
  // create a save form method
  saveEmployee(empForm: NgForm): void{
    console.log(empForm.value);
  }

}
