var express = require('express');
var router = express.Router();
var gitHub = require('octonode')
var request = require('request');

/* GET github listing. */
router.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var test = req.query.search;
    console.log(test);

    request({url: 'https://api.github.com/search/repositories?q=' + test, headers:{'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36 '}}, function (error, response, body) {
        console.log('in request');
        if (!error && response.statusCode == 200) {
            var monTab = new Array();
            var repo = JSON.parse(body);
            for(var i=0, c = repo.items.length;i<c;i++ ){
                var item = repo.items[i];
                //console.log('name : ' + item.name);
                monTab.push({name: item.name, owner: item.owner.login, url: item.html_url, description: item.description, language:item.language, updated: item.updated_at});
            }
            res.json(JSON.stringify(monTab));
        }
    })

    //res.json('{test: test}');

    console.log('At the end');

    //res.end();
});



module.exports = router;