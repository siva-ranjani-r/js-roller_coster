var age=parseInt(prompt("enter the age"));
var permission= parseInt(prompt("enter the permission"));
if ((16<=age)&&(50>=age))
{
	 if(16>age)
	{
		if("true"==permission)
		{
		console.log("parent permission allowed")
		}
	}
	else if(16>age)
	{
		if("false"==permission)
		{
		console.log("parent permission not allowed")
		}
	}
}
else 
{
	console.log("get permission  from parent");
}