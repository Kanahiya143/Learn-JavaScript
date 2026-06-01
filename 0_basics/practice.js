const date = new Date();
console.log(date.toLocaleDateString('en-GB'))
console.log(date.toLocaleTimeString('en-US', {
  timeZone: 'America/New_York'
}));
