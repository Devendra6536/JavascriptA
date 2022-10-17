newFunction();
var i=0;
for(; ;i++){
    if(i==5){
        break;
    }
    document.write(  i+ "<br>")
}

newFunction();


for(i=0;i<3;i++)
     for(j=0;j<5;j++){
         document.write(i+j);
         document.write("<br>");
     }

newFunction();
var i=1;
while(i<6)
{

    if(i==3){
        break;
    }
    document.write(i+5+"<br>");
    i++;
}
newFunction();



dev();


function dev(){

    document.write("hello abdesh ")
}


newFunction();
var t=90,s=100;
devendra(t,s);



function devendra(x,y){
    document.write(x+y);
}
newFunction();

 function devendra_pal(first_name,last_name){
     document.write(`hello ${first_name} ${last_name}`)
 }

devendra_pal("devendra","kumar");

newFunction();
function devendra_kumar_pal(first_name,last_name,your_age){
    document.write(`hello ${first_name} ${last_name} your age is ${your_age}`)
}



devendra_kumar_pal("devendra kumar ","pal",21);


function add(a,b){
    newFunction();
    document.write(` A:  ${a}, B: ${b}`);
    document.write("C:"+arguments[2]+"D:"+arguments[3]);
}
 add(10,20,30,40);


newFunction();
function addd(num,a=["dk","abd"]){
    document.write("A="+a[0]+"<br>");
    document.write("B="+a[1]+"<br>");
    document.write("num="+num+"<br>");
}
addd(20,[10,40]);       //10 40 20
newFunction();       
addd(20);               //dk abd 20
newFunction();       
addd();                 // dk abd undefined
newFunction();         




function name(){

    for( var i=0; i<arguments.length;i++)
    {
            document.write(arguments[i]+" ");
    }  
}

name("ROOPVATI","DEVENDRA ","ABDESH ","PUNEET ","VIJAYPAL");


newFunction();
function name1(){
    arguments[0]="HELLO";
    for( var i=0; i<arguments.length;i++)
    {
            document.write(arguments[i]+" "+" ");
    }  
}

name1("ROOPVATI","DEVENDRA ","ABDESH ","PUNEET ","VIJAYPAL");


newFunction();
function name11(...args){
    
            document.write(args);
    
}

name11(10,20,30,40,50,60,70,80,90,100,101,102,103,104,105,106,107,108,109,110);


newFunction();
function name111(a,...args){
            document.write(`A= ${a}<br>`);
            document.write(" ");
            document.write(args);
    
}

name111(10,20,30,40,50,60,70,80,90,100,101,102,103,104,105,106,107,108,109,110);


newFunction();
function name1111(a,...args){
            document.write(`A= ${a}<br>`);
            document.write(" ");
            document.write(args[0]+" "+args[1]+" "+args[2]+"<br>");
            document.write(args);
    
}

name1111(10,20,30,40,50,60,70,80,90,100,101,102,103,104,105,106,107,108,109,110);
newFunction();
newFunction();
function ret(a,b){
    return(a+b);
}
var i=52,j=26;
document.write(ret(i,j));
newFunction();
function abd(a, ...vs){
    document.write(a);
    newFunction();
    document.write(vs);

}
abd(1,2,3,5,6,4,7,8,9,10)



function newFunction() {
    document.write("<br>");
}
   