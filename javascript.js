document.write("ROOPWATI KUMAR MERI");

var name=" ABDESH PAL ",rool_no=101,conct="8630834625";
document.write(` hello  ${name} your Roll No is ${rool_no}and your concat   ${conct}`);
 var x=20,y=50,z=5;
 newFunction();
    document.write("<br>");
   document.write(20%5);
   document.write("<br>");
   document.write(20*5);
   document.write("<br>");
   document.write(20+5);
   document.write("<br>");
   document.write(20/5);
   document.write("<br>");
   document.write(20-5);
   document.write("<br>");

document.write(x>y&&x<y);
newFunction();
document.write(x==y||x>y);
newFunction();
document.write(x>>y);
newFunction();
document.write(x^y);
newFunction();

 name=prompt("Enter your name: ","");
age=prompt("Enter Your Age ");
if(x<y){
    document.write("devendra kumar");
}
else if(x>y)
{
    document.write("abdesh kumar");
}
else{
    document.write("Puneet kumar pal ");
}
newFunction();

document.write(`your name is ${name} and you are ${age} old `);
newFunction();

 var choice=prompt("Enter Your Choice ");
switch(choice){
    case 1:
        document.write("devendra kumar");
        break;
    case 2:
        document.write("abdesh kumar apl");
        break;
    case 3:
        document.write("puneet pal");
        break;
    default:
        document.write("you are a dirty boy");
        break;

}

newFunction();
var i=0;
for(; ;i++){
    if(i==5){
        break;
    }
    document.write( i+"<br>")
}
function newFunction() {
    document.write("<br>");
}
   

const APPLE = Symbol('Apple');