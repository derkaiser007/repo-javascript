//node 10-class-and-oop\06-inheritance

class User {
    constructor(username) {
        this.username = username
    }

    printMe() {
        console.log(`${this.username}`)
    }
}

class Student extends User {
    constructor(username, email, password, hobby) {
        super(username)
        this.email = email
        this.password = password
        this.hobby = hobby
    }

    printHobby(){
        console.log(`${this.username} loves to ${this.hobby} alot.`)
    }
}

const student = new Student('niraj', 'niraj@example.com', '', 'program')
student.printHobby()
console.log(student instanceof Student)
console.log(student instanceof User)
console.log(Student instanceof User)