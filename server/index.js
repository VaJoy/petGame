import express from 'express';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import { codes } from './config/codes.js';
import { login, modifyPassword, getInitData, initEgg } from './query.js';
import cors from 'cors';

const FileStore = sessionFileStore(session);
const app = express();
const identityKey = 'studyroom2022';

app.use(cors({
    origin: [/http\:\/\/localhost\:\d+$/, /\.github\.io$/],
    credentials: true,  // Access-Control-Allow-Credentials
    optionsSuccessStatus: 200
}));

app.use(session({
    name: identityKey,
    secret: identityKey,
    store: new FileStore(),
    cookie: ('name', 'value', { path: '/', httpOnly: true, secure: false, maxAge: 60000 * 24 * 90 }),
    resave: false,
    rolling: true,
    saveUninitialized: false,
}));

app.get('/', function (req, res, next) {
    const sess = req.session
    const { id } = sess;
    res.send(`<p>${id}</p>`);
});

app.get('/login', function (req, res, next) {
    login(req, (json) => {
        res.json(json);
    })
});

app.get('/logout', function (req, res, next) {
    req.session.destroy(function (err) {
        const json = {
            err,
            code: err ? codes.sessionError : codes.ok
        };
        res.json(json);
    });
});

app.get('/modify-password', function (req, res, next) {
    modifyPassword(req, (json) => {
        res.json(json);
    })
});

app.get('/get-init-data', function (req, res, next) {
    getInitData(req, (json) => {
        res.json(json);
    })
});

app.get('/init-egg', function (req, res) {
    initEgg(req, (json) => {
        res.json(json);
    })
});


app.listen(2022);