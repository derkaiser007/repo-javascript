//node 10-class-and-oop\07-staticproperty

class User {
    constructor(username){
        this.username = username
    }

    static createPassword() {
        const password = Number(Math.floor(Math.random * 1000000))
        console.log(password)
    }
}

class Student extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const student = new Student('niraj', 'niraj@example.com')
student.createPassword()