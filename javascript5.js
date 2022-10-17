function add(A,B,C){
    var Answer = A  + B + C ;
    return Answer;
}

var uttar = add(10,20,30,40);
document.write(uttar); 
document.write("<br>");
function show(a,...args){
    document.write(a);
    // document.write(args);
    document.write(args[0] + " " + args[1] + " " + args[2]);
}

show(10,20,30,40);



var a;
a=20;
document.write("<br>" + a);



var myfun = function show(a,b){
    var answer = a * b;
    return answer;
}
document.write("<br>" + myfun(10,20));



var a = function dev(x,y){
    for(var i=1;i<=x;i++){
        document.write("<br>" + " this is" + i + "'s table")
        for(var j=1;j<=y;j++){
            document.write("<br>"+  + i*j);
        }
          
    }
}

a(10,10);




function an(x){
    return function b(y){
        return x+y;
    }
}

var ans = (an(10));
document.write(ans(20));



function sho(x){
    return function shoe(y){
        return x*y;
    }
}

var asd = (sho(20));

document.write("<br>" + asd(20));



var fat = (a,b) => document.write("<br>" + a+b);
fat(10,20);


var a = null;
document.write("<br>" + a);
document.write(typeof(a));


(function(){ var b = 8630834625; document.write("<br>" +b);})();


(function(){var a="hello"; document.write("<br>" + a);})();



var s=125.25;
var sd = "asdfghijklmnopqrstuvwxyz";
document.write("<br>" + typeof(s));
document.write("<br>" + typeof(sd));


var fees = {
    rohit : 500,
    suneel : 600,
    Rajiv : 1000,
    total: function(){ return(500+600+1000);}
};
document.write("<br>" +fees["rohit"]);
document.write("<br>" +fees["suneel"]);
document.write("<br>" +fees["Rajiv"]);
delete fees.Rajiv;
document.write("<br>" +fees.Rajiv);


var fee = new object();

fee['dev']=100;
// document.write("<br>" +fee[dev]);




function mobiles(){
    return{
        model:"Z1pro",
        price: function(){return('price is 5000');}
    };
}
var samsung = mobiles();
document.write(samsung.model + " " + samsung.price());

function mobile(model_no){
    return{
        model:model_no,
        price: function(){return(' 5000');},
        color:"black",
        battery:"6000mAH"
    };
}

var Nokia = mobile("Nokia 1210");
document.write("<br>Nokia mobile has " + Nokia.model + "model and price of this phone is" +  Nokia.price() + " . This is " +Nokia.color + " phone has " +Nokia.battery + " battery");

if(Nokia.model!= undefined){
    document.write('<br> available');

}
else{
    document.write("<br>Not available");
}



for(var feature in Nokia){
    document.write("<br> " + feature);
}


class smartphone {
    mobile(model){
        this.model=model;
    }
}

var fokia=  new smartphone(3310);
document.write("<br>" +this.model);


var array=[];
array[0]=1;
array[1]="ramu kaka";
array[2]=100;
array[3]="Jhamman";
array[4]=10000;
array[5]="Roopvati";
document.write("<br>" + array[0]);
document.write("<br>" + array[1]);
document.write("<br>" + array[2]);
document.write("<br>" + array[3]);
document.write("<br>" + array[4])
document.write("<br>" + array[5]);
document.write("<br>" + array)
var arr=[];
var arr= new Array();

arr[0]="devendra Dhangar";
arr[1]="puneet dhangar";
arr[2]="Abdehs pal";
document.write("<br>" + arr);

var Array=["rp","dp","sp",56,89,25,"sk"];
document.write("<br>"+ Array);

var ramu=Array;
document.write("<br><br>"+ramu);
delete ramu[3]
document.write("<br>"+ramu.length);

for(var i=0; i<ramu.length; i++){
    document.write("<br>" +ramu[i]);
}

for(var i of Array){
    document.
    
    write("<br> "+i);
}
document.write("this is forEach funtion of this ")

ramu.forEach(function(name){
    document.write("<br>"+name);
});


var arr1 = ["raj","saj","gaj","maj"];
var new_arr = arr1.concat("sundra","vasundhra");
document.write("<br>"+new_arr);

var nasa =['devendra kumar','puneet','Abdesh','vijaypal','raju'];
var khasa =["suribhi","prabha","priya","sarita","suman"];
document.write("<br>"+nasa);

var nasamix=nasa.concat(khasa);
document.write("<br>"+nasamix);


document.write("<br>"+ nasa.join("+"));




 var arr1=["javascript","java","python","CSS","C++","C"];
//  document.write("<br>"+arr1.reverse());


 document.write("<br>" + arr1.slice(0,-1));

 document.write("<br>" +arr1.toString());
document.write("<br>" +arr1.isArray());


var arr1=["javascript","java","python","CSS","C++","C"];


document.write("<br>" +arr1.indexOf("python",1));
document.write("<br>" +arr1.fill(" 120 ",1,5));

document.write("<br>" +Array.isArray(["pal","Dhangar ",' gareriya']));


document.write("<br>" +arr1.splice(2,5," "))
var arr1=["javascript","java","python","CSS","C++","C"];
var new_arr= arr1.unshift("html5","project","sde1");
document.write("<br>" +new_arr);

document.write("<br>" +arr1.push("Prolang","c#","Tablue","Objective-C","deep learning"))
document.write("<br>" +arr1.shift());



function show(a){
    console.log('I am show Function' + a);
    }
    function imsec(callback){
    var a = 101;
    callback(a);
    }
    imsec(show);


var elements=prompt("Enter the Number of Elements in the array");
var arr=[];

for(var i=0; i <= elements; i++)
{
    arr[i]=prompt("Enter the Name ");

}

for( var value of arr ){
    document.write("<br><br>" + value );
}



var counters=prompt("Enter the total number of array");
var A=[];
for(var i=0; i <= counters; i++){
    A[i]=prompt("Enter the array Entity");
}
for( var i=0; i <= A.length; i++){
    document.write("<br><br>" + i );
}



 var A=["javascript","css","html","Python"];
var B=["C","C++","Ruby","Sql","Java"];


var results=A.concat(B);
document.write("<br>" +results);
var results=A.concat("sundra","python","objective-c");
document.write("<br>" +results);

document.write("<br>" +A.unshift("sundra","python","objective-c"));
document.write("<br>" +A.shift("sundra","python","objective-c"));
document.write("<br>" +A.pop());
document.write("<br>" +A.push("DEvendra dheeamn"));
document.write("<br>" +A);


var A=["javascript","css","html","Python"];
document.write("<br>" +A.join(" or "))

document.write("<br>" +A.slice(-3,-1));
document.write("<br>" +A.slice(0,));


document.write("<br>" +A.indexOf('html'));



var a1 = [,,,];
var a2 = new Array(3);
document.write("<br>" + 0 in a1);
document.write("<br>" + 0 in a2);


var a=[];
a.unshift(5);
a.unshift(10);
document.write("<br>" +a);
a.shift();
document.write("<br>" +a);
a.unshift(40,[50,60]);
document.write("<br>" +a);
a.shift();
a.shift();
a.shift();
document.write("<br>" +a);


var a=Boolean(0);
document.write("<br>" +a);
var a=Boolean("devgod");
document.write("<br>" +a);
var a=Boolean(100);
document.write("<br>" +a);
var a=Boolean(-1);
document.write("<br>" +a);
var a=Boolean(NaN);
document.write("<br>" +a);

var str="hello devendra kumar";
document.write("<br>" + str);
var str='hello devendra kumar';
document.write("<br>" + str);
var str=`devendra kumar pal`;
document.write("<br>" + str);

var str = new String("hello devendra kumar pal");
document.write("<br>" + str);


var FirstName = "Devendra";
var LastName = "Kumar";
document.write(FirstName , LastName);
document.write("<br>" +FirstName,  " Kumar");
document.write("<br>" +FirstName +" "+  LastName);
var totalstring = "Hello ".concat("Devendra ","Kumar"," pal ","grahikhanpur"," Badaun"," Uttar"," Pradesh"," India");
document.write("<br>" +totalstring);

var  totalstring = FirstName.concat(LastName);
document.write("<br>" +totalstring);

document.write(" \'");
document.write("\" ");
document.write("\t");
document.write("\f");
document.write("\b");


var a =" vaishali pal";
document.write("<br>" + a);


var a =` H D.
Goda`;
document.write("<br>" +a);
document.write("<br>" +"devendra  kumar pal");

 var str1="Gautam Gambhir";
 document.write("<br>" +`${str1} is a crickter in india`);

 var str2="Ravichandran Aswin"

 document.write("<br>" +`${str1} and ${str2} is a crickter of india`);




 var str3="Suresh Raina";
 var total =   str1.concat(str2, str3," and K L Rahul");
 document.write("<br> " +" "+ total);

 function myfun(say){
     return say;
 }

 document.write("<br> " + `${myfun("Hello")} Ellon`);

 var str4="Camroon Bencraft";
 var results = str4.charCodeAt(1); //charCodeAt are use to print the ASCII value at that index
 document.write("<br>" +results);

 var alphabet = "abcdefghi jklmnopqrstuvwxyz";
 var uppercase = alphabet.toUpperCase();
 document.write("<br>" +uppercase);
 document.write("<br>" +alphabet.search(" "));


 var a=15;
 document.write("<br>" +a);
 var b = 15.23;
 document.write("<br>" +b);


 var c = 5e4;
 document.write("<br>" +c);

 var d = 35e-5;
 document.write("<br>" +d);

 document.write("<br>" +(5/0));
 document.write("<br>" +(-5/0));

var a=2;
 document.write("<br>" +a.toString())

 var s=5624136.1257946;
 document.write("<br>" +s.toExponential(3));
 var a=5.624;
 document.write("<br>" +a*1000000);

 var a = 4532.1256;

 document.write("<br>" +a.toFixed(2));
 document.write("<br>" +a.toPrecision(3));


 document.write("<br>" +Number.isInteger("1205"));
var a=2**53;
var Safe= 9007199254740992 ;
 document.write("<br>" + Number.isSafeInteger(a-1));

 document.write("<br>" +a);


 document.write("<br>" +parseInt("10"))
 document.write(parseInt("12.00")+"<br>");
document.write(parseInt("15.45")+"<br>");
document.write(parseInt("10 20 30")+"<br>");
document.write(parseInt(" 90 ")+"<br>");
document.write(parseInt("10 years")+"<br>");
document.write(parseInt("years 10")+"<br>");
document.write(parseInt("020")+"<br>");
document.write(parseInt("12", 8)+"<br>"); // 12 octal = 10 decimal
document.write(parseInt("0x12")+"<br>"); // 12 hex = 18 decimal
document.write(parseInt("10", 16)+"<br>");
document.write("<br><br><br><br>");
document.write(parseFloat("10")+"<br>");
document.write(parseFloat("12.00")+"<br>");
document.write(parseFloat("15.45")+"<br>");
document.write(parseFloat("10 20 30")+"<br>");
document.write(parseFloat(" 90 ")+"<br>");
document.write(parseFloat("10 years")+"<br>");
document.write(parseFloat("years 10")+"<br>");
document.write(parseFloat("020")+"<br>");



document.write("<br>" +Math.PI);
document.write("<br>" +Math.abs(100))
document.write("<br>" +Math.floor(1.999999999));
document.write("<br>" +Math.round(1.044525));
document.write("<br>"+Math.max(1,100,542,954,145,5874));
document.write("<br>"+Math.min(1,100,542,954,145,5874));


var date = new Date();
document.write("<br>" +date);

var date = new Date(125425153);
document.write("<br>" +date);

var date = new Date(2003,3,24,9,45,35,0);
document.write("<br>" +date);

var date = new Date(2003,3,24,9,45,)
document.write("<br>" +date);

var date = new Date(2003,3,24,9)
document.write("<br>" +date);

var date = new Date(2003,3,24)
document.write("<br>" +date);

var date = new Date(2003,3)
document.write("<br>" +date);

var date = Date(datestring);
document.write("<br>" +date);


var date = new Date("2003-03-24");
document.write("<br><br>" +devendra);

document.write("<br>" +getfullyear);