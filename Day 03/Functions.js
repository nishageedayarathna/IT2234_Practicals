//Functions

//void type function
console.log("..........void type function..........")
function PrintMsg()
{
	console.log("Hello!")
}
PrintMsg()

//return type function
console.log("..........return type function..........")
function sum()
{
	return 5+6
}
console.log(sum())

function sub(a,b)
{
	return (a-b)
}
console.log(sub(5,3))

console.log("..........boolean function..........")
//Write a boolean function to find a given number is prime or not

function isPrime(num)
{
	if(num<=1)
{
	isPrime= false;
}
else
{
	for(let i=2;i<=num/2;i++)
	{
		if(num%i==0)
		{
			isPrime= false;
		}
		
	}
}
if(isPrime)
{
	console.log(num+" is prime number")
}

else
{
	console.log(num+" is not a prime number")
}
}
isPrime(3)


//Write a recursive function to print numbers from 1 to n
console.log("..........recursive function..........")
function printNumbers(n) {
    if (n < 1) 
	{
		return;
	}
    printNumbers(n - 1);
    console.log(n);
}
printNumbers(10);



//arrow function

/*
function PrintMsg()
{
	console.log("Hello!")
}
PrintMsg()
*/

console.log("..........arrow function..........")
const msg = ()=>{return console.log("Hello!")} //msg is a function not a variable in here
//console.log(msg)
msg()

//Write an arrow function to sum two numbers

console.log("..........Summation..........")
//01
const add = (num1,num2)=>{return num1+num2}
console.log(add(8,5))

//02
const Sum = (num1,num2)=>{
	let sum=num1+num2
	return console.log("Summation:"+sum)
}
Sum(5,8)

//multiplication
//default parameter
console.log("..........multiplication..........")
const Mul = (num1,num2=2)=>{return num1*num2}
console.log(Mul(4,5))
console.log(Mul(4))

//rest parameter
console.log("..........rest parameter..........")
const mysum = (...n)=>{
	console.log(n)
}
mysum(4,5,6,89,2)

/*
const AddAll = (mysum)=>{
	for(let i;i<mysum.length;i++)
	{
		let sum=sum+mysum[i]
	}
	return console.log(sum)
}
AddAll(mysum)

*/

//01
const MySum = (...n)=>{
	let t=0
	n.forEach((i)=>t=t+i)
	console.log(t)
}
MySum(4,5,6,89,2)

//02
const mySum=(...n)=>
{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mySum(4,5,6,89,2))

//callback function
//a function passed as an arguments

/*
const myName = (name)=>{console.log("My name is "+name)}
const Greet =(msg,fun)=>{
	console.log("Hi.. "+msg)
	fun
}
Greet("Good morning",myName("Nishagee"))
*/

console.log("..........callback function..........")
//01
const greet =(msg,fun)=>{
	console.log("Hi.. "+msg)
	fun()
}
greet("Good morning!",()=>{console.log("My name is Nishagee ")})


//02
const multwo =(n)=>n*2

const myarr=(mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multwo,4,5,6,8,2)