const student = {
    name: 'Erik',
    age: 43,
    study(subject){
        console.log("Studying ", subject)
    }
}

console.log(student.name)
student.study('JavaScript')

for(const key in student){
    console.log(typeof key, key);
    console.log(student[key])
}

// Lägger till en ny egenskap i objektet
student.names = 'Nytt';
console.log(student);

