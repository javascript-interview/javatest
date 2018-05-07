//Array to flatten
let arr = [1,2,[3,4,[5,6],7,[8,9]]];
//array to store flattened array values
let flat_arr = []; 
//index of the the element to be added to flattened arrya
let global_index = 0;

//function to do the actual flattening 
//param: array to be flattened
function flatten(arr){
	//loop throught the input array
	for (let index of arr){
		//check if array value data type is a number or object
		//and recurse if the value is of type object
		if (typeof(arr[index]) == "number")
			{
			flat_arr[global_index]=arr[index];
			global_index++;
			}
		else if (typeof(arr[index]) == "object")
			{
				flatten(arr[index]);
			}

	}
}

//calling the flattening function
flatten(arr);

//print the resulting flattened array
console.log("Result: "+flat_arr);
