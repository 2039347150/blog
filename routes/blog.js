var express = require('express');
var router = express.Router();
const conn = require('../db/index');

/* GET blog listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/list', function(req, res) {
    var userList = [{ id: 1, uname: '小明', pwd: '123' }, { id: 2, uname: '小强', pwd: '123' }, { id: 3, uname: '小红', pwd: '1314' }];
    res.render('/list', { list: userList });
})
module.exports = router;