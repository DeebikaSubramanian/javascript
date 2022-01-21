(()=>
{
    console.log("sum of array using IIFE")
    var y=[1,2,3,4,5]
    var b=0
    y.map((a)=>
    {b=b+a})
console.log(b)
})()
var x=function()
{console.log("sum of array using anonymous")
var y=[1,2,3,4,5]
    var b=0
    y.map((a)=>
    {b=b+a})
console.log(b)
}
var y=()=>
{
    console.log("sum of array using arrow function")
    var y=[1,2,3,4,5]
    var b=0
    y.map((a)=>
    {b=b+a})
console.log(b)
}
x()
y()