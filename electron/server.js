( function() {
    console.log("running server");
    const express = require('express');
    const request = require('request');
    const bodyParser = require('body-parser');
    var cors = require('cors');

    const server = express();

    server.use(bodyParser());
    server.use(cors());


    server.get('/films', (req, res2) => {
        request('http://192.168.0.1/jsonrpc?request={"jsonrpc":"2.0","id":1,"method":"Files.GetDirectory","params":{"directory":"/storage/videos"}}', function(err, res, body) {
            var data = JSON.parse(body);
            data = data.result.files;
            res2.send(data)
        })

    });

    server.post('/play', function (req, res) {
        var film = req.body.film
        console.log(film)

        request.post('http://192.168.0.1/jsonrpc', {
            json: {
                "jsonrpc": "2.0",
                "method": "Player.Open",
                "id": 1,
                "params": {
                    "item": {
                        "file": `/storage/videos/${film}`
                    }
                }
            }
        }, (err, res2, body) => {
            if (err) {
                res.send(err)
                console.log(err)
                return
            } else {
                res.send('ok')
            }
        })

    })


    server.listen(3001);
    console.log("app running on port 3005")
        module.exports = server;
    }()
);