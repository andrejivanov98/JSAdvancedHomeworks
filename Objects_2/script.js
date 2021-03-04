//---Exercise 01---

function Person(firstName, lastName, age, ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function(){
        console.log(`${firstName} ${lastName}`)
    };
}

function Student(academyName, studentId, firstName, lastName, age){
    Object.setPrototypeOf(this, new Person(firstName, lastName, age))
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function(){
        console.log(`The student ${this.firstName} is studying in the ${this.academyName}.`)
    };
   // this.returnAcademy = function(){
       // console.log(`${this.academyName}`)
   // };
}

let student1 = new Student("SEDC", 001, "Andrej", "Ivanov", 25);
//console.log(student1);
let student2 = new Student("Brainster", 005, "Petre", "Petrov", 30);
//console.log(student2);


//---Exercise 02---

Person.prototype.returnAcademy = function(){
   console.log(`${this.academyName}`);
};

student2.returnAcademy();
student1.returnAcademy();


function DesignStudent (isStudentOfTheMonth, academyName, studentId, firstName, lastName, age){
    Object.setPrototypeOf(this, new Student(academyName, studentId, firstName, lastName, age))
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function(){
        console.log(`The student ${this.firstName} is doing an adobe exam!`);
    };
}

function CodeStudent (hasIndividualProject, hasGroupProject, academyName, studentId, firstName, lastName, age){
    Object.setPrototypeOf(this, new Student(academyName, studentId, firstName, lastName, age))
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;
    this.doProject = function(type){
        if(type === "individual" || type === "group"){
            console.log(`The ${this.firstName} is working on ${type} project.`
            )
        if (type === "individual"){
            return this.hasIndividualProject = true;
        }
        if (type === "group"){
            return this.hasGroupProject = true;
        } 
        };
    }
}

function NetworkStudent (academyPart,academyName, studentId, firstName, lastName, age){
    Object.setPrototypeOf(this, new Student(academyName, studentId, firstName, lastName, age))
    this.academyPart = academyPart;
    this.attendCiscoExam = function(){
        console.log(`The student ${this.firstName} is doing cisco exam!`);
    };
}



let codeStudent = new CodeStudent(false, false,"SEMOS", 007, "Mitre", "Mitrev", 30);
codeStudent.doProject("individual");
console.log(codeStudent);

let designStudent = new DesignStudent(true, "SEMOS", 00055, "Mitre", "Mitrev", 40);
console.log(designStudent);
designStudent.attendAdobeExam();

let networkStudent = new NetworkStudent(2, "SEMOS", 00035, "Riste", "Risteski", 20);
console.log(networkStudent);
networkStudent.attendCiscoExam();

