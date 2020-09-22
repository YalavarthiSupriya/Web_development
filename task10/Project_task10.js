var userschoice=(userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput="rock"){
    return userInput;
  }
  else if (userInput="paper") {
    return userInput;
  }
  else if(userInput="scissors"){
    return userInput;
  }
  else{
    console.log("error");
  }
}
function determinewinner(userschoice,computerschoice){
    if(userschoice=="rock"){
       if(computerschoice=="paper"){
         return "computer won";
       }
       else if(computerschoice=="scissors"){
         return "computer won";
       }
       else{
         return "human won";
       }
    }

    if(userschoice=="paper"){
       if(computerschoice=="rock"){
         return "computer won";
       }
       else if(computerschoice=="scissors"){
         return "computer won";
       }
       else{
         return "human won";
       }
    }

    if(userschoice=="scissors"){
       if(computerschoice=="paper"){
         return "computer won";
       }
       else if(computerschoice=="rock"){
         return "computer won";
       }
       else{
         return "human won";
       }
    }




}
function getcomputerschoice(){
  var n=Math.floor(Math.random()*3)
  if(n==0){
    return "rock"
  }
  else if(n==1)
  {
    return "paper"
  }
  else if(n==2)
  {
    return "scissors"
  }
  else{
    return "";
  }

}
 var r=userschoice("rock");
var p=getcomputerschoice();
var s=determinewinner(r,p);
console.log(s)
