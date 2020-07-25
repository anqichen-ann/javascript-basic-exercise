export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.
  promises.forEach((Element) => {
    if (!(Element instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    }
  });
  let flag = 0;
  const newPromises = [];
  for (let i = 0; i < promises.length; i += 1) {
    newPromises.push(promises[i].catch((error) => {
      flag = 1;
      return error;
    }));
  }
  return Promise.all(newPromises).then((result) => {
    if (flag) {
      throw new Error('It should not be a success promise');
    } else {
      return result;
    }
  });
}
