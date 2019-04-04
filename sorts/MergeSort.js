// Merge Sort
// divide and conquer
// split split split
//

// We need to be able to merge 2 SORTED arrays.


let merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

let mergeSort = (arr) => {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  // console.log("merge SORT left : ", left)
  let right = mergeSort(arr.slice(mid));
  // console.log("merge SORT right : ", right);
  // console.log("merge both left and right : ",merge(left, right));
  return merge(left,right);
};


mergeSort([10,24,76,73,72,1,9])

// merge([1,10,50], [2,14,99,100]);


// SPLIT SPLIT SPLIT SPLIT
// time complexity : O n log n
// time averge : o n log n
// time worst : O n log n
// space complexity : O n

mergeSort1 = (array) => {
  if(array.length === 1) {
    return array;
  }

  return merge(mergeSort1(left));
  
}