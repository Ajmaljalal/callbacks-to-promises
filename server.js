var http = require("http");

function willItBlend(itBlends) {
  return new Promise((resolve, reject) => {
    if (itBlends) {
      resolve("Good news! It Blends!");
    } else {
      reject(new Error("Oh No! It didn't Blend!"));
    }
  });
}

function generateProbability() {
  const itBlends = Math.floor(Math.random() * 10) % 3 === 0;
  return new Promise(resolve => {
    resolve(itBlends);
  });
}

//create a server object:
http
  .createServer(function(req, res) {
    generateProbability()
      .then(itBlends => willItBlend(itBlends))
      .then(
        result => {
          res.write(result);
          res.end();
        },
        err => {
          res.write(err.message);
          res.end();
        }
      );
  })
  .listen(8080); //the server object listens on port 8080




//forked from https://codesandbox.io/s/r0q23jq9vp