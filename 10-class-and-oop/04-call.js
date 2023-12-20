//node 10-class-and-oop\04-call

function setUsername(username){
    this.username = username
    console.log("Called!")
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const user = new createUser('niraj', 'niraj@example.com', '123')
console.log(user)