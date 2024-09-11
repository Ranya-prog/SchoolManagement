package stage.add.gov.ma.SchoolManagement.Student.service;

import stage.add.gov.ma.SchoolManagement.Student.dto.StudentDTO;
import stage.add.gov.ma.SchoolManagement.Student.model.Student;

import java.util.List;

public interface IStudentService {
    Student create(Student student);

    List<Student> getAllStudents();

    StudentDTO getById(Long id);
}

