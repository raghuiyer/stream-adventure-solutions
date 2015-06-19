var websocket = require("websocket-stream");

websocket("ws://localhost:8099").write("hello\n");