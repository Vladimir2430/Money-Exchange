// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var obj={};
  var x1=Math.floor((currency-currency%50)/50);
  var x2=Math.floor((currency-x1*50)/25);
  var x3=Math.floor((currency-x1*50-x2*25)/10);
  var x4=Math.floor((currency-x1*50-x2*25-x3*10)/5);
  var x5=Math.floor(currency-x1*50-x2*25-x3*10-x4*5);
  if (currency>10000) {return {error: "You are rich, my friend! We don't have so much coins for exchange"};}
  if (x1>0) {obj.H=x1;}
  if (x2>0) {obj.Q=x2;}
  if (x3>0) {obj.D=x3;}
  if (x4>0) {obj.N=x4;}
  if (x5>0) {obj.P=x5;}
  return obj;
}
