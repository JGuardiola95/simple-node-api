"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 5001;
app.use(express_1.default.static('static'));
/**
 * app.[method]([route], [route handler])
 */
app.get('/', (req, res) => {
    // sending back an HTML file that a browser can render on the screen.
    console.log('test', path_1.default.resolve('src/pages/index.html'));
    res.sendFile(path_1.default.resolve('src/pages/index.html'));
});
// creates and starts a server for our API on a defined port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map