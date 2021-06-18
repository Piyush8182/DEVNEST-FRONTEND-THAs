//1. Write a JavaScript function to check whether an 'input' is an array or not.

is_array = function(input) 
{
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));



//2. Write a JavaScript function to clone an array.

  array_Clone = function(arra1) 
  {
   return arra1.slice(0);
      };
  console.log(array_Clone([1, 2, 4, 0]));
  console.log(array_Clone([1, 2, [4, 0]]));


//3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

 first =  function(array, n) 
 {
       if (array == null) 
       return void 0;
     if (n == null) 
       return array[0];
     if (n < 0)
       return [];
     return array.slice(0, n);
   };
 
 console.log(first([7, 9, 0, -2]));
 console.log(first([],3));
 console.log(first([7, 9, 0, -2],3));
 console.log(first([7, 9, 0, -2],6));
 console.log(first([7, 9, 0, -2],-3));



//4. Write a simple JavaScript program to join all elements of the following array into a string.

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));



//5. Write a JavaScript program to find the most frequent item of an array.

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;
