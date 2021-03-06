const http = require("http")
const fs = require('fs');
const index = fs.readFileSync(__dirname + '/index.tpl').toString();

const config = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '8080'
}

function line(str) {
  const bar = Array(15).fill('=')
  return [...bar, ` ${str} `, ...bar].join("")
}

let decodeEntities = str => {
  return str.replace(/&#(\d+);/g, function (match, dec) {
    return String.fromCharCode(dec);
  });
}

function parse(str) {
  return [str]
    .map(str => str.replace('paster=', ''))
    .map(str => str.replace(/\+/g, ' '))
    .map(decodeEntities)
    .map(unescape)
    .join("")
}


const router = function (req, res) {
  console.info(`${new Date().toISOString()} < ${req.method} < ${req.url}`)
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200);
    res.end(index);
    return
  }

  if (req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      const data = Buffer.concat(body).toString();
      console.log(line('cut here'))
      console.log(parse(data))
      console.log(line('cut here'))
      res.writeHead(302, {
        'Location': '/'
      });
      res.end();
    });
    return
  }

  // else
  res.writeHead(404);
  res.end();
}

const server = http.createServer(router)

server.listen(config.port, config.host, () => {
  console.log(`Server is running on http://${config.host}:${config.port}`);
})