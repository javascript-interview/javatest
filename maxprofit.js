#!/usr/bin/nodejs --harmony

//get array from arguments and create a JSON array
let args = process.argv;
let arr = JSON.parse(args[2]);
//This function prints usage help
function usage()
{
    script_path = args[1].split('/');
	scriptname = script_path[script_path.length-1];
	console.log("Usage: "+scriptname+" array\nExample: "+scriptname+" [2,6,3,5,8,1]");
}

//function: maxprofit
//param: array of integers representing stock prices
function maxprofit(arr){
	//check the arguments
	if (process.argv.length != 3)
		{
		usage();
		return 1;
		}
	//if array has single number print zero
	if (arr.length == 1)
		{
		console.log(0);
		}
	//if array has two numbers compare them and print appropriate result
	if (arr.length == 2)
		{
			if(arr[0] > arr[1])
				console.log(-1);
			else if(arr[0] == arr[1])
				console.log(0);
			else if(arr[0] < arr[1])
				console.log(arr[1]-arr[0])

		}
	//where arguments are greater than two, compare and print appropriate result
	if (arr.length>2)
	{
		 let minbuyprice = arr[0];
		 let minbuyday = 0;
		 let maxsellprice = arr[0];
		 let maxsellday = 0;
		 for (day=0;day<(arr.length-1);day++)
		 	{
			if(arr[day] > maxsellprice)
				{
					maxsellprice = arr[day];
					maxsellday = day;
				}
			if(arr[day] < minbuyprice)
				{
					minbuyprice = arr[day];
					minbuyday = day;
				}
			}
		 if(maxsellday == 0)
		 	console.log(-1);
		 else
		  	console.log(maxsellprice-minbuyprice);
	}
}
maxprofit(arr)
