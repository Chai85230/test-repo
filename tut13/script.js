var a = +prompt("enter the value")
if(a%2==0)
{
    console.log("a is even num")
}
else
{
    console.log("a is odd num")
}

var a = 1
var b = 2
var c = 3
if(a>b && a>c)
{
    console.log("a is max value");
    b>c ? console.log("c is min value") : console.log("b is min value");
}
else if(b>c && b>a)
{
    console.log("b is max value");
    a>c ? console.log("c is min value") : console.log("a is min value");
}
else
{
    console.log("c is max value");
    a>b ? console.log("b is min value") : console.log("a is min value");
}



var day=5;
switch(day)
{
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday")
        break;
    case 5:
        console.log("thursday")
        break;
    default:
        console.log("Default value")
    
}