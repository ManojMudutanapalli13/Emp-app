import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../services/employee.service';
import { DataToPopupService } from '../services/data-to-popup.service';
import { PopData } from '../services/data-to-popup.service';

@Component({
  selector: 'app-employees',
  standalone: false,
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {
  employee: Employee = { name: '', email: '' };
  employeeList: Employee[] = [];
  editIndex: number | null = null; // track which index is being edited
  selectedEmployee: Employee | null = null;
  showPopup = false;

  constructor(private employeeservice: EmployeeService, private datatopopservice : DataToPopupService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeservice.getEmployee().subscribe((data) => {
      this.employeeList = data;
    });
  }

  addOrUpdateEmployee(): void {
    if (!this.employee.name || !this.employee.email) {
      alert("🚫 Enter all the feilds please !");
      return
    };

    const isDuplicate = this.employeeList.some((emp, index) => {
      // Exclude current index during update
      if (this.editIndex !== null && index === this.editIndex) return false;
      return emp.name === this.employee.name && emp.email === this.employee.email;
    });

    if (isDuplicate) {
      alert("🚫 Employee with the same name and email already exists!");
      return;
    }

    if (this.editIndex === null) {
      // ➕ Add new employee
      this.employeeservice.addEmployee(this.employee).subscribe(() => {
        this.employee = { name: '', email: '' };
        this.loadEmployees();
      });
    } else {
      // ✏️ Update employee
      this.employeeservice.updateEmployee(this.editIndex, this.employee).subscribe(() => {
        this.employee = { name: '', email: '' };
        this.editIndex = null;
        this.loadEmployees();
      });
    }
  }


 editEmployee(index: number): void {
  const emp = this.employeeList[index];
  const empToEdit = { ...emp, mode: 'edit' as 'edit' };
  this.datatopopservice.setData(empToEdit);
  this.showPopup = true;
}


  deleteEmployee(index: number): void {
    const empId = this.employeeList[index].id!;
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeservice.deleteEmployee(empId).subscribe(() => {
        this.loadEmployees();
      });
    }
  } 


  viewEmployee(index: number): void {
    const emp = this.employeeList[index];
    const empToView = {...emp, mode : 'view' as 'view'};
    this.showPopup = true;
    this.datatopopservice.setData(empToView);
    // alert(`Name: ${emp.name}\nEmail: ${emp.email}`);
  }


  closePopup() {
    this.showPopup = false;
  }

 onSave(updatedData: PopData): void {
  // logic to update employee in list or call service
  this.employeeList = this.employeeList.map(emp =>
    emp.id === updatedData.id ? { ...emp, ...updatedData } : emp
  );
  this.showPopup = false;
}


}

