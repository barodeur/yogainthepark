var app = require('express')()
  // , API = require('json-api');

app.get('/hello/:name', function(req, res){
	res.send('Hello ' + req.params.name);
})

var server = app.listen(process.env.PORT || 3000);
