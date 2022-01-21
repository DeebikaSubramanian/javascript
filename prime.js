//console.log("odd")
(()=>{

    console.log("prime numbers using IIFE")
        let a=[3,10,15,7,5]
    for(i=0;i<a.length;i++)
{
for(j=2;j<a[i];j++)
    {
    if(a[i]%j==0)
           {var m=0
           break ;}
     }                  
            if(m==0)
            var m=a[i]
            else
console.log(a[i])
    }  

})()

let x=function ()
{
    console.log("prime numbers using anonymous funct")
    let a=[3,10,15,7,5]
for(i=0;i<a.length;i++)
{
for(j=2;j<a[i];j++)
{
if(a[i]%j==0)
       {var m=0
       break ;}
 }                  
        if(m==0)
        var m=a[i]
        else
console.log(a[i])
}  
}
x()

const y=()=>
{
    console.log("prime numbers using arrow function")
    let a=[3,10,15,7,5]
for(i=0;i<a.length;i++)
{
for(j=2;j<a[i];j++)
{
if(a[i]%j==0)
       {var m=0
       break ;}
 }                  
        if(m==0)
        var m=a[i]
        else
console.log(a[i])
}  
}
y()