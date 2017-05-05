const users = require('./users.js');
const tokens = require('../tokens.json');

const http = require('http');
const options = {
    hostname: 'https://api.api.ai',
    port: 443,
    path: '/v1/entities?v=20150910',
    method: 'PUT',
    headers: {
        Authorization: "Bearer " + tokens.apiai,
        'Content-Type': 'application/json'
    }
};


module.exports = () => {
    var entities = [];
    entities.push(users());
    
    console.log('sending users...');
    console.log(entities);
    
    var req = http.request(options, res => {
        res.on('data', (data) => {
            console.log(data);
        });
    });
    req.write(JSON.stringify(entities));
    req.end();
};
