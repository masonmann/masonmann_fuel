/*
Fuel Consumption Calculator
Inputs:
  Gallons consumed
  distance driven
  fuel cost per gallon
Output:
  gallons used per 100mi
*/
function computeConsumption(){
  var distance = document.getElementById('distance').value;
  var fuel = document.getElementById('fuel').value;
  var costper = document.getElementById('costper').value;
  var consumed =  (fuel / (distance/100)).toFixed(2);
  var costper100 = (consumed * costper).toFixed(2);
  document.getElementById('consumption').innerHTML = "Consumption is "+consumed+" Gallons/100mi ( $ " + costper100 + " / 100mi ) <br><br>Total Fuel cost = $ " + (fuel*costper).toFixed(2);
}