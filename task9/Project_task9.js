var raceNumber = Math.floor(Math.random() * 1000);
var earlyornot=true;
var runnerage=20;

if(runnerage>18 && earlyornot==true){
  raceNumber+=1000;
}
if(runnerage>18 && earlyornot==true){
  console.log("your race will start at 9.30am and your race number is"+raceNumber);
}
else if (runnerage>18 && earlyornot!=true) {
  console.log("your race will start at 11.00am and your race number is"+raceNumber);
}
else if (runnerage<18) {
  console.log("your race will start at 12.30 and your race number is"+raceNumber);
}
else{
  console.log("See the registration desk");
}
