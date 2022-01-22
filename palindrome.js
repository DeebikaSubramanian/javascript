(()=>{
    console.log("palindrome using IIFE")
    var a=["eye","madam","java"]
    for(i=0;i<a.length;i++)
    {
        var b=a[i].split("").reverse().join("")
        if(a[i]==b)
        console.log(a[i])
    }})()
    
    var c=function(d)
    {
        console.log("palindrome using Anonymous")
    for(i=0;i<a.length;i++)
    {
        var b=a[i].split("").reverse().join("")
        if(a[i]==b)
        console.log(a[i])
    }
    }
    
    var e=(f)=>
    {
         console.log("palindrome using Arrow funct")
    for(i=0;i<a.length;i++)
    {
        var b=a[i].split("").reverse().join("")
        if(a[i]==b)
        console.log(a[i])
    }
    }
    var a=["eye","madam","java"]
    c(a)
    e(a)
    