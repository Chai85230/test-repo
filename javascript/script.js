var a = Number(prompt('enter the value:'))
var b = Number(prompt('enter the values:'))
c = a+b
console.log(c)
var d = 25.36555;
var e = 35.443;
console.log(typeof (d)) // number data type is used for numbers including decimals
console.log(e.toFixed(2))
console.log(e.toPrecision(3))
console.log(e.toString(16))



//------
var a = Number(prompt("enter the value of a"))
var b = Number(prompt("enter the value of b"))
var c = Number(prompt("enter the value of c"))
var d = (-b + Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a)
var e = (-b - Math.sqrt(b*b - 4*a*c))/(2*a)
alert("results are"+d+", "+e)
console.log(d,e)

//--
str = 'raj'

console.log(str.length)
console.log(str.toLowerCase())
console.log(str.toUpperCase())
