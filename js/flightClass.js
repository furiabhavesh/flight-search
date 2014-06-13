var all_flights = [];
function Flight(name,number,from,to,price,departure_time){
  this.name = name;
  this.number = number;
  this.from = from;
  this.to = to;
  this.price =  price;
  this.departure_time = departure_time;
  all_flights.push(this);
}