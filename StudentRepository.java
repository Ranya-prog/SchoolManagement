package stage.add.gov.ma.SchoolManagement.Student.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import stage.add.gov.ma.SchoolManagement.Student.model.Student;


public interface StudentRepository extends JpaRepository<Student, Long> {

}
