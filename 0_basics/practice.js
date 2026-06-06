const date = new Date();
console.log(date.toLocaleDateString('en-GB'))
console.log(date.toLocaleTimeString('en-US', {
  timeZone: 'America/New_York'
}));
function randomValue(){
  const index = Math.floor(Math.random() *16);
  console.log(index);
}

setInterval(randomValue,3000)