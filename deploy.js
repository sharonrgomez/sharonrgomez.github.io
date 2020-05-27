var ghpages = require('gh-pages');

ghpages.publish('public', {
    branch: 'master'
}, function (err) { });