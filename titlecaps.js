//console.log("odd")
(()=>{

    console.log("Given string: title caps using Iife")
        let a="title caps using IIFE"
        a=a.split(" ")
    //console.log(a)
    s=""
    for(i=0;i<a.length;i++)
    {
                var b=a[i].charAt(0).toUpperCase()
                     
           var c=a[i].slice(1)
           s=s+b+c+" "
    }
    console.log(s)          
})()

let x=function ()
{
    console.log("Given string: title caps using anonymous funct")
        let a="title caps using anonymous funct"
        a=a.split(" ")
    //console.log(a)
    s=""
    for(i=0;i<a.length;i++)
    {
                var b=a[i].charAt(0).toUpperCase()
                     
           var c=a[i].slice(1)
           s=s+b+c+" "
    }
    console.log(s)   
}

const y=()=>
{
    console.log("Given string: title caps using arrouw function")
    let a="title caps using arrow function"
    a=a.split(" ")
//console.log(a)
s=""
for(i=0;i<a.length;i++)
{
            var b=a[i].charAt(0).toUpperCase()
                 
       var c=a[i].slice(1)
       s=s+b+c+" "
}
console.log(s)     
}
x()
y()