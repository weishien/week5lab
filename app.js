let express = require('express');
let bodyParser = require('body-parser');
let ejs = require('ejs');

let app = express();
let db = [];

let viewPaths = __dirname + '/public';

// configure express to handle machine
app.engine('html',ejs.renderFile);
app.set('view engine','html');

// parse application
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(express.static('img'));
app.use(express.static('css'));

app.get('/', function(req,res) {
    res.sendFile(viewPaths + '/index.html');
});

app.get('/listTasks', function(req,res) {
    res.render(viewPaths + '/listTasks.html', {
        task : db 
    })
});

app.get('/newTask', function(req,res) {
    res.sendFile(viewPaths + '/newTask.html')
});

app.post('/incomingTask', function(req,res) {
    console.log(req.body);
    db.push(req.body);
    console.log(db);
    res.send("Thank you!")
});

app.listen(8080);
