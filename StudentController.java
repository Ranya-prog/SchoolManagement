package stage.add.gov.ma.SchoolManagement.Student.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stage.add.gov.ma.SchoolManagement.Student.dto.StudentDTO;
import stage.add.gov.ma.SchoolManagement.Student.model.Student;
import stage.add.gov.ma.SchoolManagement.Student.service.IStudentService;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private IStudentService studentService;

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public StudentDTO getAllStudents(@PathVariable Long id) {
        return studentService.getById(id);
    }

    @PostMapping("/store")
    public ResponseEntity<Student> saveStudent(@RequestBody Student student){
        Student savedStudent = studentService.create(student);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }
}


