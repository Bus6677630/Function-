//question number 8
function areaOfTriangle(base,height) {
  let area=(1/2*base*height)
  return area;
}
let triangleArea=areaOfTriangle(8,9);
console.log(triangleArea);

//question number 9
function numberOfLegsOfAnimals(chickens,cows,pigs) {
  let chickenLegs=chickens*2;
  let cowLegs=cows*4;
  let pigLegs=pigs*4;
  let sum=chickenLegs+cowLegs+pigLegs;
  return sum;
}
let AnimalLegs=numberOfLegsOfAnimals(2,3,4);
console.log(AnimalLegs);

//question number 10
function myArray(arr){
  
  
  if(arr.length==2&& typeof arr[0]=='number'&& typeof arr[1]=='number'){
let mul=3*arr[0];
  return mul;}
  else{
    return 0;
  }
  
}
let Array2=myArray([4,3]);
console.log(Array2);

//question number 11

function compair(num1,num2) {
  if( typeof num1=='number' && typeof num2=='number'){
    
    return num1==num2;
  }
  else{ 
    return false;
  }
}
let numbers=compair(2,2);
console.log(numbers);

// question number 12

function myNumber(num){

  if (typeof num=='number'&& Number.isInteger(num)&&(num) &&  num%100==0)
  {
    return true;
  }
  else{
    
    return false;
  }
  
}
let theNumber=myNumber('b');
console.log(theNumber);

// question number 13
function checkNumbers(num1) {
  if(num1%2==0&& typeof num1=='number'&& num1!==0){
   
    return 'even';
  }
  else if (num1==0) {
    return'neither even nor odd'
    
  }
  else {
    return 'odd';
  }
}

let theNumber1=checkNumbers(0);
console.log(theNumber1);

// question number 14
function checkGrade(score) {
  
  if(score>100 ||  score<0)
{return 'Invalid Score';
  
}
  else if (score<=100 && score>=90) {
    return 'Grade A';
  
  }
  else if (score<=89 && score>=80) {
    return 'Grade B';
    
  }
else if (score<79) {
  return 'Grade c'
}
}
let studentsScore=checkGrade(-50);
console.log(studentsScore);m
