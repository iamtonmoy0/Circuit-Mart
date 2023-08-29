"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// initializing application
const init = () => {
    let app = (0, express_1.default)();
    let routes = [
        {
            method: 'get',
            path: '/new',
            headers: (req, res) => {
                res.send(`route is working \n on method ${req.method} `);
            }
        }
    ];
    routes.forEach(route => {
        app[route.method](route.path, route.headers);
    });
    // basic route root
    app.get('/', (req, res) => {
        res.send('hello world');
    });
    return app;
};
const app = init();
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
//# sourceMappingURL=server.js.map