function positionLetters(str){
  str = str.split(" ");
  str = str.join("");
  var o = {};

  for (var i = 0; i < str.length; i++) {
    if (typeof o[str[i]] === 'undefined'){
      o[str[i]] = i;
    } else {
      o[str[i]] += ", " + i;
    }
  }
  return o;
}




console.log(positionLetters("lighthouse in the house"));