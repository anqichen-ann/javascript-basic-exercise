export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  let result;
  if (string === null || string === undefined || string === '') {
    result = 0;
  } else if (!prediction) {
    result = string.length;
  } else {
    const arr = string.split('');
    let count = 0;
    arr.forEach((element) => {
      if (prediction(element)) {
        count += 1;
      }
    });
    result = count;
  }
  return result;
}
