const express = require("express");

const app = express();

app.use(express.static(__dirname + "/"));

express.static.mime.types["wasm"] = "application/wasm";

app.listen(3000, () => {
    console.log("Listening for connections at http://localhost:3000");
});
