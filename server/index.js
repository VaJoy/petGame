import express from 'express';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import rateLimit from 'express-rate-limit'
import { codes } from '../config/codes.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';
import {
    login, modifyPassword, getInitData, initEgg, attack,
    reward, markEvent, endWorking, buyProp, useProp
} from './query.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import domain from 'domain';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const key = fs.readFileSync(path.resolve(dirname, '../config/vajoy.key.pem'));
const cert = fs.readFileSync(path.resolve(dirname, '../config/vajoy.crt.pem'));
const ca = fs.readFileSync(path.resolve(dirname, '../config/vajoy.csr.pem'));
const FileStore = sessionFileStore(session);
const app = express();
const identityKey = 'studyroom2022';

app.use((req, res, next) => {
    const req_domain = domain.create();
    req_domain.on('error', (err) => {
        console.log('[domain-error]', err);
        res.status(500).send(err.stack);
    });
    req_domain.run(next);
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(cors({
    origin: true,
    credentials: true,  // Access-Control-Allow-Credentials
    optionsSuccessStatus: 200
}));

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 30,
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(express.static(path.resolve(dirname, '../dist')));

app.use(limiter);

const isDev = process.argv.splice(2)[0] === 'dev';
let cookieOption = {
    httpOnly: true,
    maxAge: 60000 * 24 * 90
}

if (!isDev) {
    cookieOption = Object.assign(cookieOption, {
        secure: true,
        sameSite: 'none',
    });
}

app.use(session({
    name: 'sessionId',
    secret: identityKey,
    store: new FileStore(),
    cookie: cookieOption,
    resave: false,
    rolling: true,
    saveUninitialized: false,
}));

app.get('/', function (req, res) {
    const sess = req.session
    const { id } = sess;
    res.send(`<p>${id}</p>`);
});

app.post('/login', function (req, res) {
    //res.cookie(name, value [, options]);
    login(req, (json) => {
        res.json(json);
    })
});

app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        const json = {
            err,
            code: err ? codes.sessionError : codes.ok
        };
        res.json(json);
    });
});

app.post('/modify-password', function (req, res) {
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

http.createServer(app).listen(80);
https.createServer({ key, cert, ca, requestCert: true, rejectUnauthorized: false }, app).listen(443);