//find missing values with index

let array = [11, 15, 17, 18, 19];
let array2 = array[0];
let array3 = array[array.length -1];
let i = 1;
while (array2 < array3){
  if(array[i] != ++array2){
    array.splice(i, 0, array2);
    i++;
    console.log(`Number ${array2} index is ${i -1}`);
  }else{
    i++;
  }
}
console.log(array);
