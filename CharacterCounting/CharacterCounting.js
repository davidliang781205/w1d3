function countLetters(str){
  str = str.split(" ");
  str = str.join("");
  var o = {};

  for (var i = 0; i < str.length; i++) {
    if (typeof o[str[i]] === 'undefined'){
      o[str[i]] = 1;
    } else {
      o[str[i]] += 1;
    }
  }
  return o;
}




console.log(countLetters("lighthouse in the house"));