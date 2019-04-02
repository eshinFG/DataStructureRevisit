insertionSort = array => {
  const lenght = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // move number to the first position
      // we will always compare to first item first to see if we can move it straught to the front
      // splice at position and get new array with just the value and get the first element
      // move it to the front of the array(unshift)
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where number should go

      // if current element is less than the element before it(array[i-1])
      if (array[i] < array[i - 1]) {
        // we will loop through all the elements after 0 up until our current position at i
        // start at 1; stop when j is less than our current position; increment by 1
        for(let j = 1; j < i; j++) {
          let currentElement = array[i];
          // if our eleemtn is greater or equal to element at j
          // AND less than the element at j 
          // we are find Inbetween numbers of j
          if(currentElement >= array[j-1] && currentElement < array[j]) {
            // move the element to the element left of j
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
};
