export default function formatNumber(number, option) {
  // This function will format the number to a fixed number string. The decimal part should 2.
  // That means the number 2 will be formatted as '2.00'. The `option` is an object which contains
  // a `currency` property. If the property is `true`, a dollar sign will be added to the result.
  //
  // Your target:
  //
  // * Please implement the function and pass all the tests in format_number_spec.js.
  // * Please do NOT modify the signature of the function.
  var str = number+'';
  var arr = str.split('.');
  var result;
  if(arr.length == 1){
    result = number+'.00';
  }else{
    var str_length = arr[1].length;
    if(str_length < 3){
      result = number + '0'.repeat(2-str_length);
    }else{
      var temp_str = arr[1].substr(0,2);
      var sub_num = arr[1].charAt(2)>4? parseInt(temp_str)+1 : temp_str;
      result = arr[0] + '.' + sub_num;
    }
  }
  if(option)
  return '$ '+ result;
  else
  return result;

}
