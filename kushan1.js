const chai = require("C:/Users/kam/node_modules/chai");
const request = require('C:/Users/kam/node_modules/request');
request('http://ergast.com/api/f1/2017/circuits.json', function (error, response, body) {
  
  console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
  chai.expect(response.statusCode).to.equal(200); //Asert whether response is success 
  body_json = JSON.parse(body);
  chai.expect(body_json.MRData.CircuitTable.Circuits[0].circuitName.trim()).to.equal('Albert Park Grand Prix Circuit');
  chai.expect(body_json.MRData.CircuitTable.Circuits[0].circuitId.trim()).to.equal('albert_park');
});