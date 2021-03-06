export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null) {
    throw new Error('Flatten undefined or null array');
  }
  const result = [];
  if (array.length !== 0) {
    array.forEach((element) => {
      if (element instanceof Array) {
        result.push(...element);
      } else {
        result.push(element);
      }
    });
  }
  return result;
}
