'use strict';

let path            = require('path'),
    express         = require('express'),
    bodyParser      = require('body-parser'),
    session         = require('express-session'),
    logger          = require('morgan');

// Setup the Express Pipeline
let app = express();
let staticPath = path.join(__dirname, '../../public');
app.use(express.static(staticPath));
app.use(logger('dev'));
// Setup pipeline support for server-side templates
app.engine('pug', require('pug').__express);
app.set('views', __dirname);
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
// Setup pipeline session support
app.use(session({
    name: 'session',
    secret: 'ohhellyes',
    resave: false,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: false,
        secure: false
    }
}));

/*****************************************************************************************************/


let users = [];
const comments = [];

// Get the list of current users
app.get('/v1/users', (req, res) => {
    res.status(200).send(users);
});

// Set the user's username
app.put('/v1/user', (req, res) => {
    if (!req.body.username) return res.status(400).send({ error: 'username required' });
    if (req.body.username === req.session.username) {
        return res.status(204).end();
    }
    // Is it available
    if (users.indexOf(req.body.username) === -1) {
        // Remove any old username
        users = users.filter(user => {
            return user !== req.session.username
        });
        // Add username to list
        users.push(req.body.username);
        console.log(users);
        // All good.  Add to session and send response
        req.session.username = req.body.username;
        res.status(204).end();
    } else {
        res.status(400).send({ error: 'username in use '});
    }
});

// Get the list of comments
app.get('/v1/comments', (req, res) => {
    if (!req.session.username) return res.status(403).send({ error: 'you must set username first' });
    res.status(200).send(comments);
});

// Post a new comment
app.post('/v1/comment', (req, res) => {
    if (!req.session.username) return res.status(403).send({ error: 'you must set username first' });
    if (!req.body.text) return res.status(400).send({ error: 'text field required' });
    const text = req.body.text;
    comments.push({
        time: Date.now(),
        username: req.session.username,
        text: text.replace(/<(?:.|\n)*?>/gm, '')
    });
    res.status(204).end();
});

/*****************************************************************************************************/

// Render SPA base
app.get('*', (req, res) => {
    res.render('base.pug');
});

// Listen for stuff
let server = app.listen(8080, () => {
    console.log('Example app listening on ' + server.address().port);
});