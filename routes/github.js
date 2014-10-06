var express = require('express');
var router = express.Router();
var request = require('request');

/* GET github listing. */
router.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    request({url: 'https://api.github.com/search/repositories?q=' + req.query.search, headers:{'User-Agent': 'Node js'}}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var reposFilter = new Array();
            var repos = JSON.parse(body);
            for(var i=0, c = repos.items.length;i<c;i++ ){
                var item = repos.items[i];
                reposFilter.push({name: item.name, owner: item.owner.login, url: item.html_url, description: item.description, language:item.language, updated: item.updated_at});
            }
            res.json(JSON.stringify(reposFilter));
        }
    })
});

module.exports = router;