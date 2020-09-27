// import MessageMixer from './maink'
// const MessageMixer=require('./maink.js');
// import {countCharacter,capitalizeFirstCharacterOfWords,reverseWord,reverseAllWords,replaceFirstOccurence,replaceAllOccurrences,
//   encode,palindrome,pigLatin} from './maink';

const {countCharacter,capitalizeFirstCharacterOfWords,reverseWord,reverseAllWords,replaceFirstOccurence,replaceAllOccurrences,
    encode,palindrome,pigLatin} = require('./task18.js');
function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));
  console.log(palindrome("cheese"));
  console.log(pigLatin("What is the color of the sky",'-'));
}

displayMessage();
