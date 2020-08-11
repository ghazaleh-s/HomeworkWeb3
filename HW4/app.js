var arr=[];
var fibo = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    arr = fibo(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
};

 console.log(fibo(prompt("Please enter a number:")));