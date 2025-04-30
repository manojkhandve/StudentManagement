import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  createStudent(Student: Student): Observable<Student> {
    console.log(Student);
    return this.http.post<Student>(this.apiUrl, Student);
  }

  updateStudent(id: number, Student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, Student);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}