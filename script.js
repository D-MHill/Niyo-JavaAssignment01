//Function that sums the even numbers in an array.

const numbersArray = [1, 2, 6, 9, 13, 15, 18, 23, 34, 45, 67, 88, 96, 101];
const result = sumOfEvenIndices(numbersArray);

function sumOfEvenIndices(num) {
  let sum = 0;

  for (let i = 0; i < num.length; i += 2) {
    sum += num[i];
  }

  return sum;
}

console.log(result); 


//Function that counts the ocurrence of certain number in an array

function countOccurrences(arr, targetNumber) {
   let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === targetNumber) {
            count++;
    }
  }

  return count;
}

const numbers = [1, 2, 3, 4, 2, 5, 2, 6];
const target = 2;

const result1 = countOccurrences(numbers, target);
console.log(result1);

