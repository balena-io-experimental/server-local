var http = require('http');

const PORT = process.env.MYPORT;
const TARGETPORT = process.env.TARGETPORT;

function pongQuery() {
    http.get({
        hostname: 'localhost',
        port: TARGETPORT,
        path: '/ping',
        agent: false  // create a new agent just for this one request
    }, (res) => {
        console.log(`-> Port ${PORT} run a query...`)
    });
}

function handleRequest(request, response) {
  console.log(`<- Port ${PORT} received a query...`);
  response.end('Pong');
  // Do a pong back
  setTimeout(
      pongQuery,
      1000
  );
}


var server = http.createServer(handleRequest);
server.listen(PORT, function () {
  console.log("Server listening on: http://localhost:%s", PORT);
});

// Get the ping-pong started
if (PORT == 8000) {
    setTimeout(
        pongQuery,
        2000
    );
}
