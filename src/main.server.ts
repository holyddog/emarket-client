import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';

import * as path from 'path';
import * as express from 'express';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ServerAppModule } from './app/server-app.module';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { enableProdMode } from '@angular/core';

enableProdMode();

const app = express();
const port = 8000;
const baseUrl = `http://localhost:${port}`;

app.engine('html', ngExpressEngine({
    bootstrap: ServerAppModule
}));

app.set('view engine', 'html');
app.set('views', 'src');

// app.use('/', express.static('dist', { index: false }));
// app.use('/assets', express.static('assets'))

app.use('/', express.static(path.join('src', 'assets')));
app.use('/', express.static('dist', { index: false }));

app.use('/backoffice', express.static('f:\\web\\test'));

app.get('/favicon.ico', (req, res) => {
    res.sendStatus(204);
});

app.get('*', (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('../dist/index', {
        req: req,
        res: res
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
});

app.listen(8000, () => {
    console.log(`Listening at ${baseUrl} [${new Date()}]`);
});
