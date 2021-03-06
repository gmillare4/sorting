function bubbleSort(array, counter = array.length - 1) {
  if (array.length === 1 || array.length === 0) return array;

  for (let i = 0; i < counter; i++) {
    let j = i + 1;
    if (array[i] > array[j]) {
      swap(array, i, j);
    }
  }
  counter--;
  if (counter !== 0) {
    bubbleSort(array, counter);
  }
  return array;
}
function swap(array, i, j) {
  let moveElem = array.splice(i, 1);
  array.splice(j, 0, moveElem[0]);
}
// [8, 2, 5, 7]
