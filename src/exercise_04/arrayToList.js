export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  const result = {};
  const index = 0;
  function toList(obj, i) {
    obj.value = array[i];
    if (array[i + 1] !== undefined) {
      obj.next = {};
      obj.next = toList(obj.next, i + 1);
    } else {
      obj.next = null;
    }
    return obj;
  }
  toList(result, index);
  return result;
}
