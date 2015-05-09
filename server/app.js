var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.get('/data', function(request, response){
    response.sendFile(path.join(__dirname, './public/assets/data/resume-data.json'));
});

app.get('/template', function(request, response){
    response.sendFile(path.join(__dirname, './public/views/templates/category.html'));
});

app.get('/*', function(request, response){
    var file = request.params[0] || 'views/index.html';
    response.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function(){
    console.log('running on port: ', app.get('port'));
});
