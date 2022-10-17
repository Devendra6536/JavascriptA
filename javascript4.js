




// var student1 = "devendra";
// var student2 = "abdesh ";
// var student3 = "puneet";

// var student  =  {
//     firstName :"Devendra",
//     lastName: "Kumar", 
//     age :19
//  };


// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.age);



// var faculty ={
//     FirstName: "Mohit",
//     LastName: "Rastogi",
//     Age: 35,
//     ContactNo : 8630834625,
//     Designation: "Assistant Professor"
// };

// documen

t.write(faculty.FirstName);
// document.write("\n");
// document.write(faculty.LastName);
// document.write("\n");
// document.write(faculty.ContactNo);
// document.write("\n");
// document.write(faculty.Designation);
// document.write("\n");
// document.write(faculty.Age);
// document.write("\n");

// console.log(faculty["FirstName"]);
// console.log(faculty["LastName"]);


var student=[];

function student(FirstName,LastName,Age) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Age= Age;
    this.greeting= function(){
        return "Hi , I'am " + this.FirstName + this.LastName + " and I'am " + this.Age + "Years old. "
    }
}



var s1 = new student("dk","pal",19);
console.log(s1);
console.log(s1.greeting());
// var student0 ={
//     FirstName:"Devendra",
//     LastName:"Pal",
//     Age:19,

//     greeting:function(){
//         return "Hi , I'am " + this.FirstName + this.LastName + " and I'am " + this.Age + "Years old. "
//     }
// };
// console.log(student0.greeting());

// var student1 = new Object();
// student1.FirstName="Devendra";
// student1.LastName="Kumar";
// student1.Age=19;
// console.log(student1)


// var student2 = { };
// student2.FirstName="John";
// student2.LastName="parkar";
// student2.Age=8;
// console.log(student2)







// var studentsNames = ["devendra","puneet","abdesh","vinod"];
// console.log(student);


// var naughtylist = [];
// naughtylist.push(student[0]);
// naughtylist.push(student[1]);
// console.log(naughtylist);
// naughtylist.pop(student[1]);


// var index = naughtylist.indexOf("devendra");
// var index2 = student.indexOf("vino");



// if(index > -1){
//     naughtylist = naughtylist.splice(index,2);
// }

// console.log(naughtylist);



// for (var i=0;i<10;i++){
//     console.log(i);
// }

// for (var i=1;i<=10;i++){
//     for(var j=1;j<=10;j++){
//         console.log(i*j);
//     }
// }


// var student = ["devendra","abdesh","puneet","vinod","vijaypal"];
// console.log(student[0]);
// console.log(student[1]);
// console.log(student[2]);
// console.log(student[3]);
// console.log(student[4]);
// console.log("\n\n\n");


// for (var i=0; i<student.length; i++) {
//     console.log(student[i]);
// }

// for(var i=0; i<5;i++){
//     for(var j=0; j<i;j++){
//         document.write("*");
         
//     }document.write("\n");
// }


// fucntion 

// var length1 = 15;
// var width = 10;
// var area = length1*width;

// console.log(area);



// function area(length,width){
//     return length*width;
// }
// var n = window.prompt("Enter the number of area to be calculated");
 


// var rectangle = [];


// for(var i = 0; i <n; i++){
//     var length = window.prompt("Enter the length");
//     var width = window.prompt("Enter the width");
//     rectangle.push(area(length,width));
//     document.write(rectangle);
// }


// var bankbalance = 50000;

// function makeTransaction(priceofsale) {
//     if(priceofsale <= bankbalance){
//         bankbalance -=priceofsale;
//         console.log("purchase successfull");
//     }
//         else{
//             console.log("purchase failurefull");
        
//     }


// }
// console.log(bankbalance);
// makeTransaction(1000);

// console.log(bankbalance);
// makeTransaction(1000);


// console.log(bankbalance);
// makeTransaction(5000);

// console.log(bankbalance);
// makeTransaction(1);

// console.log(bankbalance);
// // makeTransaction(100);



// var transaction = function makeTransaction(priceofsale) {
//     if(priceofsale <= bankbalance){
//         bankbalance -=priceofsale;
//         console.log("purchase successfull");
//     }
//         else{
//             console.log("purchase failurefull");
        
//     }


// };
// transaction(10)

// var customername = function(first,last){
//     console.log("first name"+ first + " last name" + last);
// }