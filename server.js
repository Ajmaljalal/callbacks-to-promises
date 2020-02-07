const http = require('http');

function willItBlend(itBlends, callback) {
  // should be true for anything divisible by 3 between 0 and 9
  if (itBlends) {
    callback(null, 'Good news! It Blends!');
  } else {
    callback(new Error('Oh No! It didn\'t Blend!'));
  }
}

function generateProbability(callback) {
  const itBlends = Math.floor(Math.random() * 10) % 3 === 0;
  callback(itBlends);
}

//create a server object:
http
  .createServer(function(req, res) {
    generateProbability(itBlends => {
      willItBlend(itBlends, (err, result) => {
        if (err) {
          res.write(err.message);
        } else {
          res.write(result);
        }
        res.end();
      });
    });
  })
  .listen(8080); //the server object listens on port 8080


//forked from https://codesandbox.io/s/r0q23jq9vp