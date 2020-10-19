const { createServer } = require('https');
const fs = require('fs')
const path = require('path')
const { parse } = require('url');
const next = require('next');


const port = parseInt(process.env.PORT, 10) || 3445;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// ssl keys and certification 
const options = {key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')), cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))}

app.prepare().then(() => {

  const server = createServer(options, (req, res) => {
  const parsedUrl = parse(req.url, true);
  const { pathname, query } = parsedUrl;
    

    handle(req, res, parsedUrl);
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on port ${port}`);
  });

});
