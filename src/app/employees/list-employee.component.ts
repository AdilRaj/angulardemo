import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  constructor() { }

  ngOnInit() {
    let employee = new Employee();
    employee.id = 1;
    employee.name = 'Mark';
    employee.gender = 'Male';
    employee.contactPreference = 'Email';
    employee.email = 'mark@pragimtech.com';
    employee.dateOfBirth = new Date('10/25/1988');
    employee.department = 'IT';
    employee.isActive = true;
    employee.photoPath = 'assets/images/mark.png';
    this.employees.push(employee);
    employee = new Employee();
    employee.id = 2;
    employee.name = 'Mary';
    employee.gender = 'Female';
    employee.contactPreference = 'Phone';
    employee.phoneNumber = 2345978640;
    employee.dateOfBirth = new Date('11/20/1979');
    employee.department = 'HR';
    employee.isActive = true;
    employee.photoPath = 'assets/images/mary.png';
    this.employees.push(employee);
    employee = new Employee();
    employee.id = 3;
    employee.name = 'John';
    employee.gender = 'Male';
    employee.contactPreference = 'Phone';
    employee.phoneNumber = 5432978640;
    employee.dateOfBirth = new Date('3/25/1976');
    employee.department = 'IT';
    employee.isActive = false;
    employee.photoPath = 'assets/images/john.png';
    this.employees.push(employee);

  }

}

