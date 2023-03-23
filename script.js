// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here(store all decreptedWord)
  // Only change code below this line

  var words = encodedStr.split(" ");
  for(var index = 0; index < words.length; index++){
	  var encryptedword = words[i];  //we need to convert it back in decrypted word
	  var decreptedWord = "";
	  for( var j= 0; j<encryptedword.length; j++){
		  decreptedWord += lookup[encryptedword.charAt(j)];//you can get this encrypteddata from this lookup thats why lookeup is here
	  }
	  decodedArr.push(decreptedWord);
  }
  return decodedArr.join(" ") ;//return decodedArr //join is using to pass all words in  a single string of a decode
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
