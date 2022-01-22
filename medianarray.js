(()=>{

    var a=[1,2,12,13,15]
    var b=[17,26,30,38,45]
    console.log("median of array using IIFE is")
    var merge=a.concat(b)
    //console.log(merge)
    var mid=merge.length/2-1
    var mid1=mid+1
    //console.log(mid,mid1)
    var med=merge[mid]+merge[mid1]
    //console.log(med)
    var median=med/2
    console.log(median)
    })()
    var x=function()
    {var a=[1,2,12,13,15]
        var b=[17,26,30,38,45]
        console.log("median of array using anonymous function is")
        var merge=a.concat(b)
        //console.log(merge)
        var mid=merge.length/2-1
        var mid1=mid+1
        //console.log(mid,mid1)
        var med=merge[mid]+merge[mid1]
        //console.log(med)
        var median=med/2
        console.log(median)}

        var y=()=>
        {var a=[1,2,12,13,15]
            var b=[17,26,30,38,45]
            console.log("median of array using arrow function is")
            var merge=a.concat(b)
            //console.log(merge)
            var mid=merge.length/2-1
            var mid1=mid+1
            //console.log(mid,mid1)
            var med=merge[mid]+merge[mid1]
            //console.log(med)
            var median=med/2
            console.log(median)
           }
           var c 
           var d
           x(c)
           y(d)


    