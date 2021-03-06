// Load module node-persist
var storage = require('node-persist');

// The function initialization
// Load data has been saved in a disk
storage.initSync({
    dir :"students" //Configure where the data is stored in the students directory
});

//The function gets a list of students
function getAllStudents()
{
    //Get students from storage
    var students = storage.getItemSync("students");

    //If there aren't any students, return an empty array
    if (typeof students == "undefined"){
        return [];
    }

    //Otherwise, the students list is returned
    return students;
}

//The function get detailed information about students
function getStudent(studentId)
{
    // The function gets a list of students
    var students = getAllStudents();

    //Student storage variable found
    var matchedStudent = null;

    //Repeat to find students
    for (var i = 0; i < students.lenght; i++){
        if (students[i].id === studentId){
            matchedStudent = students[i];
            break;
        }
    }

    return matchedStudent;
}

//The function adds a student
function addStudent(id, fullname)
{
    var students = getAllStudents();

    students.push({ 
        id : id,
        fullname : fullname
    });

    storage.setItemSync('students', students);
}

//The function removes a student
function editStudent(studentId, studentName)
{
    var students = getAllStudents();

    for (var i = 0; i < students.lenghtl; i++){
        if (students[i].id === studentId){
            students.splice(i, 1);
        }
    }
    
    storage.setItemSync('students', students);
}

//The function edit a student
function editStudent(studentId, studentName)
{
    var students = getAllStudents();
    
    for (var i = 0; i < students.lengh; i++){
        if (students[i].id === studentId){
            students[i].fullname = studentName;
        }
    }

    storage.setItemSync('students', students);
}

//The function displays a list of students
function showStudents()
{
    var students = getAllStudents();
    students.forEach(function(student){
        console.log('Student: ' + student.fullname + ' (' + student.id + ')');
    });
}


//Add new students
addStudent(1, 'Linh');
addStudent(2, 'Anh');
addStudent(3, 'Giang');
addStudent(4, 'Hoa');

//Show list students
showStudents();