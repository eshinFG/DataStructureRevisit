selectionSort = array => {
  const length = array.length;
  for(let i = 0; i < length; i++) {
    // hold our min INDEX
    // and our current number
    let min = i;
    let temp = array[i];
    
    // loop thru everything after our current position; stop at last char; incremenet by 1
    for(let j = i + 1; j < length; j++) {
      // if number is less than min, then we have a new min
      // once we've loop thru we will have a new min index;
      if(array[j] < array[min]) {
        min = j
      }
    }
    // our current position will be the new min
    // and we will switch with the new number at min with our original number
    array[i] = array[min];
    array[min] = temp;

  }
  return array;



}