export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const result = [];
  if (start !== end) {
    const num = Math.abs(end - start);
    if (end > start) {
      for (let i = 0; i < num; i += 1) {
        result.push(start + i);
      }
    } else {
      for (let i = 0; i < num; i += 1) {
        result.push(start - i);
      }
    }
  }
  return result;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let result = 0;
  result = numbers.reduce((pre, cur) => pre + cur, 0);
  return result;
}
