function getInfo(){
    fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)
        .then(function (promise) {
            return promise.json()
        })
        .then (function(students){
         let averageMoreThan3 = students.filter(student => student.averageGrade>3);
         console.log(averageMoreThan3);
         //let femalesAverageMoreThan3 = students.filter(student => student.averageGrade > 3 && student.gender != "Male");
         //console.log(femalesAverageMoreThan3);
         //let malesFromSkopjeOver18 = students.filter(student => student.gender != "Female" && student.age >18 && student.city === "Skopje").map(student => `${student.firstName} ${student.lastName}`);
         //console.log(malesFromSkopjeOver18);
         //let averageGradesFemalesOver24 = students.filter(student => student.age > 24 && student.gender != "Male").map(student => `${student.averageGrade}`);
        //console.log (averageGradesFemalesOver24);
        //let malesStartingWithB = students.filter(student => student.gender != "Female" && student.averageGrade > 2 && student.firstName[0] === "B");
        //console.log(malesStartingWithB);
        })
    }
    
    getInfo();
    