import express from 'express';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import rateLimit from 'express-rate-limit'
import { codes } from '../config/codes.js';
import {
    login, modifyPassword, getInitData, initEgg, attack,
    reward, markEvent, endWorking, buyProp, useProp
} from './query.js';
import cors from 'cors';
import bodyParser from 'body-parser'

const FileStore = sessionFileStore(session);
const app = express();
const identityKey = 'studyroom2022';


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(cors({
    origin: [/http\:\/\/localhost\:\d+$/, /\.github\.io$/],
    credentials: true,  // Access-Control-Allow-Credentials
    optionsSuccessStatus: 200
}));

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 30,
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(limiter)

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

app.post('/login', function (req, res, next) {
    login(req, (json) => {
        res.json(json);
    })
});

app.post('/logout', function (req, res, next) {
    req.session.destroy(function (err) {
        const json = {
            err,
            code: err ? codes.sessionError : codes.ok
        };
        res.json(json);
    });
});

app.post('/modify-password', function (req, res, next) {
    modifyPassword(req, (json) => {
        res.json(json);
    })
});

app.post('/get-init-data', function (req, res) {
    getInitData(req, (json) => {
        res.json(json);
    })
});

app.post('/init-egg', function (req, res) {
    initEgg(req, (json) => {
        res.json(json);
    })
});

app.post('/mark-event', function (req, res) {
    markEvent(req, (json) => {
        res.json(json);
    })
});

app.post('/end-working', function (req, res) {
    endWorking(req, (json) => {
        res.json(json);
    })
});

app.post('/buy-prop', function (req, res) {
    buyProp(req, (json) => {
        res.json(json);
    })
});

app.post('/attack', function (req, res) {
    attack(req, (json) => {
        res.json(json);
    })
});

app.post('/use-prop', function (req, res) {
    useProp(req, (json) => {
        res.json(json);
    })
});

app.get('/reward', function (req, res) {
    reward(req, (json) => {
        res.json(json);
    })
});

app.listen(2022);