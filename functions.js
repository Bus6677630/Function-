//question number 1
function myFirst() {
  let greeting = 'Hello!';
  console.log(greeting);

}
myFirst();

//question number 2

function mySecond(a){
  console.log(a);


}
mySecond(9);

//question number 3

function my3rd(b){
  mySecond(b);
  
}
my3rd(10);

//question number 4

function my4th(arr){
  if(arr.length>0){
    console.log(arr[0]);
  }
  else{
    console.log('Array is empty');
  }
}
my4th([2,4,6,8]);

//question number 5

function myFifth(arr) {
  
  if (arr.length==2 && typeof arr[0]=='number' &&typeof arr[1]=='number'){
    
let sum=arr[0]+arr[1];
console.log(sum);
  }
  else{
    console.log('Error:the array must be 2 numbers.');
  }

}
myFifth([5,7]);

//question number 6
mfunction convert(minutes){
  
  let seconds=60*minutes;
  
  console.log(seconds);
  
}
convert(5);


//question number 7

function increment(number) {
number++;
return number;
}
let result=increment(7);
console.log(result);

