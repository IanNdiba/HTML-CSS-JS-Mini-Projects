var Student = /** @class */ (function () {
    function Student(name, major, grades) {
        this.name = name;
        this.major = major;
        this.grades = grades;
        this.name = name;
        this.major = major;
        this.grades = grades;
    }
    Student.prototype.addGrade = function (grade) {
        this.grades.push(grade);
    };
    Student.prototype.gpa = function (grades) {
        var sum = this.grades.reduce(function (grade, acc) {
            return acc + grade;
        }, 0);
        return sum / this.grades.length;
    };
    return Student;
}());
var eva = new Student("Eva", "Computer Science", [95, 75, 83]);
console.log(eva);
console.log(eva.gpa([95, 75, 83]));
