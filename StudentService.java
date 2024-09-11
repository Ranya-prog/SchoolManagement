package stage.add.gov.ma.SchoolManagement.Student.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import stage.add.gov.ma.SchoolManagement.Student.dto.StudentDTO;
import stage.add.gov.ma.SchoolManagement.Student.dto.mapper.StudentMapper;
import stage.add.gov.ma.SchoolManagement.Student.model.Student;
import stage.add.gov.ma.SchoolManagement.Student.repository.StudentRepository;
import stage.add.gov.ma.SchoolManagement.Student.service.IStudentService;

import java.util.List;

@Service
public class StudentService implements IStudentService {
    @Autowired
    private StudentRepository studentRepository;


    @Override
    public Student create(Student student) {
        return null;
    }

    @Override
    public List<Student> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        return studentRepository.findAll();
    }

    @Override
    public StudentDTO getById(Long id) {
        StudentDTO found = StudentMapper.INSTANCE.toDTO(studentRepository.findById(id).orElseThrow());
        return found;
    }
}
