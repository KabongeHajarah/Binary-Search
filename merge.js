
//Given an array of unsorted numbers, return the index of the following target if the target exists in the array.
// If the target is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle,);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let newArray = [];
  let x = 0;
  let y = 0;

  while (x < left.length && y < right.length) {
    if (left[x] < right[y]) {
      newArray.push(left[x]);
      x++;
    } else {
      newArray.push(right[y]);
      y++;
    }
  }

  return newArray.concat(left.slice(x)).concat(right.slice(y));
}

function findIndex(arr, target) {
  const sortedArray = mergeSort(arr);
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (sortedArray[middle] === target) {
      return arr.indexOf(sortedArray[middle]);
    } else if (sortedArray[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return null;
}

const num = [45, 12, 6, 89, 2, 5];
const target = 6;
console.log(findIndex(num, target));


//Given an unsorted array of numbers return the sorted array in descending order
let arr=[123,89,5,23,9,56];


arr.sort(function(a, b) {
  return b - a;
});

console.log(arr); 


//Given the following array, search for the following target
let mytarget = 34
let arr2 = [1,4,78,2,67,3];



arr2.sort((a, b) => a - b);


let low = 0;
let high = arr2.length - 1;
let mid;

while (low <= high) {
  mid = Math.floor((low + high) / 2);
  if (arr2[mid] === mytarget) {
    console.log(` ${mytarget} at index ${mid}`);
    break;
  } else if (arr2[mid] < mytarget) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

if (low > high) {
  console.log(`${mytarget} doesn't exist in the array`);
}
