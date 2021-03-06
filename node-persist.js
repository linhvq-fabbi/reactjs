// Load module node-persist
var storage = require('node-persist');

// The function initialization
// Load data has been saved in a disk
storage.initSysc({
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
    
}

//The function removes a student
function editStudent(studentId, studentName)
{

}

//The function edit a student
function editStudent(studentId, studentName)
{

}

//The function displays a list of students
function showStudents()
{

}