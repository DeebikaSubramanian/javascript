(()=>{
console.log("Rotate array using IIFE")
var a=[1,2,3,4,5]
var b=a.length-1
for(i=0;i<=b;i++)
{
var y=a.push(a[b-i])
  }
for(i=0;i<=b;i++)
var z=a.shift()
 console.log(a)
})()

var d=function()
{console.log("Rotate array using anonymous function")
var a=[1,2,3,4,5]
var b=a.length-1
for(i=0;i<=b;i++)
{
var y=a.push(a[b-i])
  }
for(i=0;i<=b;i++)
var z=a.shift()
 console.log(a)
}

 var c=(x)=>
 {
     console.log("Rotate array using arrowfunction")
         var b=a.length-1
     for(i=0;i<=b;i++)
     {
     var y=a.push(a[b-i])
       }
     for(i=0;i<=b;i++)
     var z=a.shift()
      return a
  }
    var a=[1,2,3,4,5]
  d()
   console.log(c(a))