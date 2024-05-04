var a = 20
while(a>=1)
{
    if(a%2!=0)
    {
        console.log(a);
    }
    a--
}

//--------

var str = "Chaitanya"
var i = str.length-1
while(i>=0)
{
    console.log(str.charAt(i))
    i--    
}
//----

var s = "Mridula"
var j = s.length-1
var vow=0
var cons=0
while(j>=0)
{
    if(s.charAt(j)=='a' || s.charAt(j)=='e' || s.charAt(j)=='i' || s.charAt(j)=='o' || s.charAt(j)=='u')
    {
        vow+=1;
    }
    else{
        cons+=1;
    }
    j--
}
console.log(`Vow in mridula are ${vow}`)
console.log("cons in mridula are "+cons)





