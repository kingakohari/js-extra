const obj1 = {} 
console.dir(obj1) // {}
obj1.toString() // '[object Object]'

const obj2 = new Object() // object literal
console.dir(obj2)

const arr1 = [] 
console.dir(arr1)

const arr2 = new Array() // array literal
console.dir(arr2)

function User(name){
 this.name = name
 this.iam = function(){
     console.log(`I am ${this.name}.`);
    }
}
const user1 = new User('Béla')
/* console.dir(user1.iam()) */

const user2 = new User('Anna')
/* console.dir(user2) */

User.prototype.iam2 = function(){
    console.log(`I am ${this.name} for the second time.`);
   }

const user3 = new User('Kinga')
/* console.dir(user3.iam2()) */

/* let user3Proto =  Object.getPrototypeOf(user3) */

let user3Proto =  user3.__proto__
console.log(user3Proto);

function CustomUser(name, role) {
    User.call(this, name)    // call method olyan, mint a constructor method
    this.role = role
}

const user4 = new CustomUser('Dezső', 'frontendes')
console.dir(user4)