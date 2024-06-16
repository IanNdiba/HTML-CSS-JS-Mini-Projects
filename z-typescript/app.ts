class Student {
  constructor(
    public name: string,
    public major: string,
    public grades: Array<number>
  ) {
    this.name = name;
    this.major = major;
    this.grades = grades;
  }

  addGrade(grade: number) {
    this.grades.push(grade);
  }

  gpa(grades: Array<number>) {
    const sum = this.grades.reduce((grade, acc) => {
      return acc + grade;
    }, 0);

    return sum / this.grades.length;
  }
}

const eva = new Student("Eva", "Computer Science", [95, 75, 83]);
console.log(eva);

console.log(eva.gpa([95, 75, 83]));
