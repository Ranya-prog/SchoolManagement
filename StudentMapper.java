
package stage.add.gov.ma.SchoolManagement.Student.dto.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import stage.add.gov.ma.SchoolManagement.Student.dto.StudentDTO;
import stage.add.gov.ma.SchoolManagement.Student.model.Student;

@Mapper
public interface StudentMapper {
    StudentMapper INSTANCE = Mappers.getMapper(StudentMapper.class);

    default StudentDTO toDTO(Student student){
        if ( student == null ) {
            return null;
        }

        StudentDTO studentDTO = new StudentDTO();
        studentDTO.setId(student.getId());
        studentDTO.setFirstname(student.getFirstname());
        studentDTO.setLastname(student.getLastname());

        return studentDTO;
    }
    Student toEntity(StudentDTO studentDTO);
}
