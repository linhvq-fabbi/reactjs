// Load module node-persist
var storage = require('node-persist');

// Hàm khởi tạo
// Load dữ liệu đã lưu trên ổ đĩa
storage.initSysc({
    dir :"students" //cấu hình nơi lưu trữ dữ liệu nằm trong thư mục t
});

//Hàm lấy danh sách sinh viên
function getAllStudents()
{
    //Lấy sinh viên từ nơi lưu trữ
    var students = storage.getItemSync("students");

    //Nếu không có sinh viên nào thì trả về một mảng rỗng
    if (typeof students == "undefined"){
        return [];
    }

    //Ngược lại trả về danh sách sinh viên
    return students;
}

//Hàm lấy tiết sinh viên
function getStudent(studentId)
{

}

//Hàm thêm một sinh viên
function addStudent(id, fullname)
{

}

//Hàm xóa sinh viên
function editStudent(studentId, studentName)
{

}

//Hàm sửa sinh viên
function editStudent(studentId, studentName)
{

}

//Hàm hiển thị danh sách sinh viên
function showStudents()
{

}