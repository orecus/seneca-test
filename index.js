const Chairo  = require('chairo');
const Hapi    = require('hapi');
const server  = new Hapi.Server();

server.connection({ port: 3000 });
server.register({ register: Chairo }, function (err) { });
server.start(function () {
  console.log('SERVER Online', server.info);

  server.seneca.client();
  server.seneca.act({role: 'math', cmd: 'sum', left: 3, right: 9}, function (err, result) {
    if (err) return console.error(err)
    console.log('Response from microservice | math.sum', result)
  });

  server.seneca.act({role: 'math', cmd: 'product', left: 3, right: 4}, function (err, result) {
    if (err) return console.error(err)
    console.log('Response from microservice | math.product', result)
  });
});
