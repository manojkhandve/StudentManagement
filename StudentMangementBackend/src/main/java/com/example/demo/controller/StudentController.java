package com.example.demo.controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Student;
import com.example.demo.repo.StudentRepository;
import com.example.demo.service.StudentService;



@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins  = "http://localhost:4200")
public class StudentController {
    private final StudentService studentService;
    private final StudentRepository studentRepository;

    public StudentController(StudentService studentService,StudentRepository studentRepository) {
        this.studentService = studentService;
        this.studentRepository=studentRepository;
    }

    // Get all students
    @GetMapping
    public ResponseEntity<List<Student>> getAllstudents() {
        List<Student> students = studentService.getAllstudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    // Get a student by ID
    @GetMapping("/{id}")
    public ResponseEntity<Student> getstudentById(@PathVariable Long id) {
        Student student = studentService.getstudentById(id);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    // Create a new student
    @PostMapping
    public ResponseEntity<Student> createstudent(@RequestBody Student student) {
        Student createdstudent = studentRepository.save(student);
        return new ResponseEntity<>(createdstudent, HttpStatus.CREATED);
    }

    // Update an existing student
    @PutMapping("/{id}")
    public ResponseEntity<Student> updatestudent(@PathVariable Long id, @RequestBody Student studentDetails) {
        Student updatedstudent = studentService.updatestudent(id, studentDetails);
        return new ResponseEntity<>(updatedstudent, HttpStatus.OK);
    }

    // Delete a student
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletestudent(@PathVariable Long id) {
        studentService.deletestudent(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}