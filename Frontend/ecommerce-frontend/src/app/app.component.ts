import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { StudentComponent } from './components/student/student.component';

@Component({
  selector: 'app-root',
  template: `<app-Student></app-Student>`,
  standalone: true, // Indicate that this is a standalone component
  imports: [CommonModule, StudentComponent] // Add CommonModule and StudentComponent here
})
export class AppComponent {}