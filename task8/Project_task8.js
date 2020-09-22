var username="Suppi";
var enter=(username=="")?console.log("hello") : console.log(" hello "+username);
var userquestion="";
console.log(userquestion);
var randomnumber=Math.floor(Math.random() * 8);
var eightball="";
switch(randomnumber) {
  case 0:
   eightball="It is certain";
    // code block
    break;
  case 1:
     eightball="It is decidedly so";
    // code block
    break;
    case 2:
    eightball="Reply hazy try again";
      // code block
    break;
    case 3:
    eightball="Cannot predict now";
        // code block
    break;
    case 4:
    eightball="Do not count on it";
          // code block
    break;
    case 5:
    eightball="My sources say no";
            // code block
    break;
    case 6:
    eightball="Outlook not so good";
              // code block
    break;
    case 7:
    eightball="Signs point to yes";
      // code block
      break;
    default:
    // code block
}

console.log(eightball);
