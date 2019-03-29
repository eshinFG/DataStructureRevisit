let merge = (arr1, arr2) => {
  // array for results;
  let results = [];
  // This is our start points for both arrays
  let i = 0,
    j = 0;

  // Begin the switching of whether the pointer to the 
  // left array position is bigger than right array position
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // Now we can deal with the left overs
  while(i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while(j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
};


// Now here is where we utilize mergeSort
// We need to find the mid point of the array and split each one.
// We will recursively call mergeSort on each halves
// This will continuously call mergeSort until the halves and halves are sorted
// and continue returning 
let mergeSort = (arr) => {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
