//Find the maximum number in the array using foreach

let numArray=[2,4,6,8,10]

let max=0;

numArray.forEach((n)=>{

	if(max<n)
	{
		max=n
	}
	
	//(max<n)?max=n:n=n
	//(max<n) && (max=n)
})
console.log("Maximum Number: "+max)

