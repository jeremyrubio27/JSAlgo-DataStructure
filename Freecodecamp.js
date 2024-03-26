


const Window = function (tabs){
    this.tabs = tabs;
}

Window.prototype.closeTabs = function(index){
   
    this.tabs.splice(index,1)

    return this
}

Window.prototype.openTab = function(tab){

    if(arguments.length == ""){
        this.tabs.push('new tab');
    }
    else{
        this.tabs.push(tab);
    }

    return this
}

Window.prototype.join = function(windows){
    this.tabs = this.tabs.concat(windows.tabs);


    return this
}

const workWindows   = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp'])
const socialWindows = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']) 
let val = workWindows.closeTabs(2).openTab().openTab('Youtube').join(socialWindows)
//console.log(val);


class Person {
    constructor(name,age,country){
        this.name    = name;
        this.age     = age;
        this.country = country
    }

    displayDetails(){
        console.log("name:    " + this.name)
        console.log("age:     " + this.age);
        console.log("country: " + this.country)
    }
    
}


let Person1 = new Person("Jeremy", 25, 'Philippines')
let Person2 = new Person("Mik", 27,"London")

// Person.prototype.displayDetails = function(){
    
//         console.log("name:    " + this.name)
//         console.log("age:     " + this.age);
//         console.log("country: " + this.country)

// }

// console.log(Person1.displayDetails());
// console.log(Person2.displayDetails());


/*Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter. */


class Rectangle{

    constructor(width,heigth){
        this.width  = width;
        this.heigth = heigth
    }

    calculatePerimeter(){
        return 2*(this.width + this.heigth);
    }

    calculateArea(){
        return this.width * this.heigth;
    }

}

let Rectangle2 = function (width,height){
    this.width  = width
    this.height = height
}

Rectangle2.prototype.calculateArea = function(){
    return this.width * this.height
}

Rectangle2.prototype.calculatePerimeter = function(){
    return 2*(this.width + this.height)
}


let calc  = new Rectangle(20,30);
let calc2 = new Rectangle2(20,30) 

// console.log(calc.calculatePerimeter())
// console.log(calc.calculateArea())
// console.log(calc2.calculatePerimeter())
// console.log(calc2.calculateArea())


// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors
//Below is the new way doing the activity
class Vehicle {

    constructor(name, make,model){
        this.name  = name;
        this.make  = make;
        this.model = model; 
    }

    displayDetails(){
        console.log("name:  " + this.name)
        console.log("make:  " + this.make);
        console.log("model: " + this.model)
    }


}

class Car extends Vehicle{
    constructor(name,make,model,door){
        super(make,model,name)
        this.door  = door
    }

    displayDetails(){
        super.displayDetails()
        console.log("door:  " + this.door)
    }
}

let toyota = new Car('Toyota Civic', 'Toyota', '2005',4);

//toyota.displayDetails()

//Old way below


function Vehicle2(name,make,model) {

    this.name  = name;
    this.make  = make;
    this.model = model;

}

Vehicle2.prototype.displayDetails2 = function(){
    
    console.log('Car name:  ' + this.name)
    console.log('Car make:  ' + this.make)
    console.log('Car model: ' + this.model)

}


function Car2(name,make,model,door){
    
    Vehicle2.call(this, name, make, model)

    this.name  = name;
    this.make  = make;
    this.model = model;
    this.door  = door;

}

Car2.prototype.displayDetails2 = function(){

    Vehicle2.prototype.displayDetails2.call(this)
    console.log('Car door : ' + this.door) 
}


let Corola = new Car2('Corola', 'Toyota', 2005,4)

//Corola.displayDetails2()


//Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount{
    constructor(accnum,balance){
        
        this.accnum  = accnum;
        this.balance = balance; 
    }

    getAccount(){
        this.accnum  = 122;
        this.balance = 0 

        return this
    }

    deposit(accnum, amount){
        if(accnum == this.accnum){
            this.balance += amount
            console.log('Your new balance is: ' + this.balance);
        }else{
            console.log('Incorrect Account Number');
        }
    }

    displayBalance(){

    console.log('Your remaining balance: ' + this.balance);

    }

    withdraw(accnum , amount){
        if(accnum == this.accnum && amount > this.balance ){
            console.log('Insufficient balance');
        }else{
            this.balance -=  amount;
            console.log('Your new balance is: ' + this.balance);
        }
    }
}

let customer = new BankAccount()

// customer.getAccount().deposit(122,50)
// customer.displayBalance();
// customer.withdraw(122,60);
// customer.displayBalance()
// customer.deposit(122,20)
// customer.withdraw(122,60);
// customer.withdraw(122,60);
// customer.displayBalance()
// customer.deposit(122,50)
// customer.withdraw(122,60);

//Old way in solving the activity
// Remove the getAccount lol cause I realized that there's no need for me to do that


function BankAccount2(acc,val){

    if (acc === undefined || val === undefined) {
        throw new Error('Account number and initial value are required.');
      }

    this.acc = acc
    this.val = val
}



BankAccount2.prototype.deposit = function(acc,amount){

    if(acc != this.acc){
        throw new Error('Incorrect Accont Number')
    }

    this.val+=amount

    return console.log('Your new balance is: ' + this.val);

}

BankAccount2.prototype.withdraw = function(acc,amount){
    if(acc != this.acc){
        throw new Error('Incorrect Account Number');
    }

    if(acc == this.acc && amount > this.val){
        throw new Error('Insufficient balance')
    }else{

        this.val -= amount
        return console.log('Your remaining balance: ' + this.val )
    }
}

BankAccount2.prototype.displayBalance = function(){
    return console.log('Your remaining balance is: ' + this.val)
}


// let customer2 = new BankAccount2(122,0)

// customer2.deposit(122,50)
// customer2.withdraw(122,40)
// customer2.displayBalance()


//Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape{
    
    constructor(base,height){
        this.base = base;
        this.height = height
    }

    calculateArea(){
        return this.base * this.height
    }

}

class Circle extends Shape  {

    calculateArea(rad){

        // console.log(super.calculateArea())

        console.log((Math.PI)*(rad**2))

    }
    
}

class Triangle extends Shape {

    

    calculateArea(base,height){
    console.log(((base * height) / 2 ))

    }

}

// let shape    = new Shape()
// let circle   = new Circle()
// let triangle = new Triangle(2,6)

// circle.calculateArea(7)
// triangle.calculateArea(2,6)


//Call back behind the scene doing this using for loop

// function myMap(callback,array){

//     let arr = []

//     for(let i = 0; i < array.length; i++){
//          arr.push(callback(array[i],i,array))
//     }

//     return arr;

// }

// function callback(element, i, array){

//     return element * 3;
// }
// let evalArr = [12,13,14,15];
// let answer = myMap(callback,evalArr)
// console.log(answer)
// console.log(evalArr)




// Call back behind the scene


// function MyArray(array){
//     return this.array = array
// }

// MyArray.prototype.map = function(callback){

//     let newArr = []
     
//     for(let i = 0; i < this.array.length; i++){

//         newArr.push(callback(this.array[i], i , this.array))

//     }

//     return newArr;

// }

// let myInstance = new MyArray([12,14,16,18])

// let getVal = myInstance.map(element => element * 5);
// console.log(getVal)







 // Perform a separate query to get additional information
//  var gr = new GlideRecord('incident');
//  gr.addQuery('assignment_group', assignmentGroup);
//  gr.query();
//  if(gr.next()) {
//      var priority = gr.getDisplayValue('priority');
//      gs.info("Assignment Group: " + gr.getDisplayValue('assignment_group')+ ", Count: " + count + ", Priority: " + priority);
//  }

// Working Roman Numeral to Integer

    // var romanToInt = function(s) {

    //     let sum = 0;
    //     let prev     = 0;
        
    //     let arr = s.toUpperCase().split('') 
    //     let I = 1;
    //     let V = 5;
    //     let X = 10
    //     let L = 50
    //     let C = 100
    //     let D = 500
    //     let M = 1000


    //     for(let i=0; i < arr.length; i++){

            
    //         if(arr[i] == 'I'){
    //             arr[i] = I
    //         }else if(arr[i] == 'V'){
    //             arr[i] = V
    //         }
    //         else if(arr[i] == 'X'){
    //             arr[i] = X
    //         }else if(arr[i] == 'L'){
    //             arr[i] = L
    //         }else if(arr[i] == 'C'){
    //             arr[i] = C
    //         }else if(arr[i] == 'D'){
    //             arr[i] = D
    //         }else if(arr[i] == 'M'){
    //             arr[i] = M
    //         }

    //         sum += arr[i]
    //         if(arr[i] > prev ){
    //             sum -= 2 * prev    
    //         }
            
    //         prev = arr[i]
            
    //     }

    // return sum
    // };

//console.log(romanToInt('MMXXIV'))
//console.log(romanToInt('IV'))


//scenario to check next element



        // if(curr == preced){

    
        
           
        // }else{
        //     if(curr == 'I'){
        //         sum -= I
        //     }else if(curr == 'V'){
        //         sum -= V
        //     }else if(curr == 'X'){
        //         sum -= X
        //     }else if(curr == 'L'){
        //         sum -= L
        //     }else if(curr == 'C'){
        //         sum -= C
        //     }else if(curr == 'D'){
        //         sum -= D
        //     }else{
        //         sum -= M
        //     }
        // }


        // var removeDuplicates = function(nums) {

        //     let curr = 0;   
        //     let prev = 0;            
          
        //     for( let i = 0; i < nums.length - 1; i++){
        //     curr = nums[i]
        //     prev = nums[i+1]

        //     console.log(curr + " : " + prev);

        //     if(curr == prev){
        //         nums.splice(i,1);
        //         i--;
        //     }

        //     }
        //     return nums;
        //     }
//        var removeDuplicates = function(nums) {
//     return nums.filter((value, index, self) => self.indexOf(value) === index);
// };

        


            // console.log(removeDuplicates([0,0,0,0,1,1,1,2,2,3,3,4,4,4,4,4]))
            // console.log(removeDuplicates([1,1,2]));

            // for( let i = 0; i < nums.length; i++){
            
            //     curr = nums[i]
             
            //     console.log(curr + " : " + prev);
            //     if(curr == prev){
                    
            //         nums.splice(i,1);
                    
                   
            //     }
            //     prev = curr
    
            //     }   


var obj = {
    "data": [
      {
        "Employee": [
          {
            "Name": [
              {
                "id": 12938,
                "name": "John Doe"
              },
              {
                "id": 24829,
                "name": "Fred Luddy"
              }
            ]
          },
          {
            "Company": [
              {
                "id": 24728,
                "company": "ACME"
              }
            ]
          }
        ]
      },
      {
        "Contractor": [
          {
            "Name": [
              {
                "id": 19283,
                "name": "John Snow"
              },
              {
                "id": 20367,
                "name": "Jack Mills"
              }
            ]
          },
          {
            "Company": [
              {
                "id": 23628,
                "company": "ABC"
              }
            ]
          }
        ]
      }
    ]
  }

var arrs = []

for(let i=0; i < obj.data.length; i++){
    let item = obj.data[i];

    for(var key in item){
       
         arrs.push(`${item[key][0].Name[1].name} - ${item[key][0].Name[1].id}`)
        
       // console.log(`${item[i].Contractor[0].Name[1].name} - ${item[i].Employee[0].Name[1].id}`)

    }

}

console.log(arrs[1]);

// for (let i = 0; i < obj.data.length; i++) {
//     let item = obj.data[i];

//     for (let key in item) {
//         if (key === "Employee" || key === "Contractor") {
//             let names = item[key][0].Name;
//             console.log(`${names[1].name} - ${names[1].id}`);
//         }
//     }
// }