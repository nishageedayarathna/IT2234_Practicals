let numArray=[1,3,5,7,9]
console.log("Array:"+numArray)

//using for loop
console.log("Using for loop")
for(let i=0;i<numArray.length;i++)
{
console.log(numArray[i])
}

//using foreach loop
console.log("Using foreach loop")
numArray.forEach((n)=>{
	console.log(n)
})