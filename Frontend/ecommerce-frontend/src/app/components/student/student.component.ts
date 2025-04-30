import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-Student',
  templateUrl: './Student.component.html',
  styleUrls: ['./Student.component.css'],
  standalone: true, // Indicate that this is a standalone component
  imports: [CommonModule, FormsModule] // Add CommonModule and FormsModule here
})
export class StudentComponent {
  Students: Student[] = [];
  newStudent: Student = { id: 0, name: '', address: '', percentage: 0, imageUrl: '' };
  editStudent: Student | null = null;

  constructor(private StudentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.StudentService.getAllStudents().subscribe((data: Student[]) => {
      this.Students = data;
    });
  }

  addStudent(): void {
    this.StudentService.createStudent(this.newStudent).subscribe((Student: Student) => {
      this.Students.push(Student);
      this.newStudent = { id: 0, name: '', address: '', percentage: 0, imageUrl: '' }; // Reset form
    });
  }

  startEdit(Student: Student): void {
    this.editStudent = { ...Student }; // Create a copy for editing
   
  }

  updateStudent(): void {
    if (this.editStudent) {
      this.StudentService.updateStudent(this.editStudent.id, this.editStudent).subscribe(
        (updatedStudent: Student) => {
          const index = this.Students.findIndex(p => p.id === updatedStudent.id);
          if (index !== -1) {
            this.Students[index] = updatedStudent; // Update the Student in the list
          }
          this.editStudent = null; // Reset edit mode
        },
        error => {
          console.error('Error updating Student:', error);
          // Optionally show a user-friendly message
        }
      );
    }
  }

  deleteStudent(id: number): void {
    this.StudentService.deleteStudent(id).subscribe(() => {
      this.Students = this.Students.filter(Student => Student.id !== id); // Remove from the list
    });
  }
}