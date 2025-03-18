
console.log("1.Print numbers from 1 to 10")
for(let i=1;i<=10;i++)
{
	console.log(i)
}

console.log("2.Print only odd numbers")
for(let i=1;i<=10;i++)
{
	if(i%2==1)
	{
		console.log(i)
	}
}

console.log("3.Print numbers in reverse")
for(let i=10;i>0;i--)
{
	console.log(i)
}


console.log("4.Reverse numbers in left and right ")
var x = 9
var mid = parseInt(x/2) + 1;


for(var i= mid - 1; i>0; i--)
{
	console.log(i)
}

console.log(mid);

for(var i = x; i>mid; i--)
{
	console.log(i)
}


