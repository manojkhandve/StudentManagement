package com.example.demo.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Student;
import com.example.demo.repo.StudentRepository;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllstudents() {
        return studentRepository.findAll();
    }

    public Student createstudent(Student student) {
        return studentRepository.save(student);
        
    }
    public Student updatestudent(Long id, Student studentDetails) {
        Student student = studentRepository.findById(id).orElseThrow();
        student.setName(studentDetails.getName());
        student.setAddress(studentDetails.getAddress());
        student.setPercentage(studentDetails.getPercentage());
        student.setImageUrl(studentDetails.getImageUrl());
        return studentRepository.save(student);
    }
    public Student getstudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("student not found with id: " + id));
    }

    public void deletestudent(Long id) {
        studentRepository.deleteById(id);
    }
}
