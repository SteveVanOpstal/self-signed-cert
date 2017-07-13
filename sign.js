const fs = require('fs');
const selfsigned = require('selfsigned');
const pems = selfsigned.generate([{name: 'commonName', value: 'localhost'}], {
  algorithm: 'sha256',
  keySize: 2048,
  extensions: [{
    name: 'subjectAltName',
    altNames: [{
      type: 2,  // DNS
      value: 'localhost'
    }]
  }]
});

fs.writeFileSync('./cert.crt', pems.cert, {encoding: 'utf-8'});
fs.writeFileSync('./cert.key', pems.private, {encoding: 'utf-8'});
fs.writeFileSync('./cert.pem', pems.private + pems.cert, {encoding: 'utf-8'});
