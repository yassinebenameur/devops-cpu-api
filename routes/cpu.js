var express = require('express');
var router = express.Router();
var os = require('os-utils');

/* GET users listing. */
router.get('/', function (req, res, next) {
    os.cpuUsage(function (v) {
        let cpu = 'CPU Usage (%): ' + v;
        res.send(cpu);

    });
});

module.exports = router;
