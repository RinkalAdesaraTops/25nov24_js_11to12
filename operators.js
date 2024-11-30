//arithmetic operators
// +,-,*,/,%,**,++,--
//logical relational assignment ternary type of string op
let a = parseInt(prompt("Enter a:"))
let b = parseInt(prompt("Enter b:"))
// let c = a+parseInt(b)
// document.write('<br> Addition is '+c)
document.write('<br> Addition is '+(a+b))
document.write('<br> Modulus is '+(a%b))
//% - modulus - reminder
let sqr = a**3 //a*a*a
document.write('<br> Cube is '+sqr)
// ++ - increment
// -- - decrement 
let ch = 25
document.write('<br> ch is '+ch)
let xy = ch++ //26 postfix - get old value
document.write('<br> ch is '+ch)
document.write('<br> xy is '+xy)

let qr = ++ch //27 prefix - get a new value
document.write('<br> ch is '+ch)
document.write('<br> qr is '+qr)


