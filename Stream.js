const stream = require('stream');
const { json } = require('stream/consumers');

function setupStreams(dataInputStream, dataOutputStream, callback) {
    dataInputStream.on('data', (data) => {
        dataOutputStream.write({log:JSON.parse(data)}.log);
    });

    dataInputStream.on('end', () => {
        dataOutputStream.end();
    });

    dataOutputStream.on('finish', () => {
        callback();
         
    });

}

let readable = new stream.Readable();
let writable = new stream.Writable({  objectMode: true, 
                                      write: (chunk, encoding, callback) => {
                                        console.log(chunk);
                                        callback(null, true);
                                      }
});
setupStreams(readable, writable, () => console.log("onEnd"));

readable.push('{ "log": "Request received" }');
readable.push(null);
module.exports.setupStreams = setupStreams;