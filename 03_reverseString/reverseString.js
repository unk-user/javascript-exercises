const reverseString = function(string) {
    let last = string.length;
    let reversestring = "";
for(i = 0; i < last; i++){
  reversestring += string[last - i - 1];
}
return reversestring;
};

// Do not edit below this line
module.exports = reverseString;
