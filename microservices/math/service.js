var seneca = require('seneca')();

function math(options) {
  this.add({role: 'math', cmd: 'sum'}, sum)
  this.add({role: 'math', cmd: 'product'}, product)
  this.add({init: 'math'}, init)

  function init(msg, respond) {
    console.log('seneca init');
    respond()
  }

  function sum(msg, respond) {
    var out = { answer: msg.left + msg.right }

    console.log('math.sum was executed!', out);
    respond(null, out)
  }

  function product(msg, respond) {
    var out = { answer: msg.left * msg.right }
    console.log('math.product was executed!', out);

    respond(null, out)
  }
}

seneca.use(math)
seneca.listen();
