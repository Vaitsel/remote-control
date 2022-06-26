import { httpServer } from "./src/http_server/index.js";
import { WebSocketServer, createWebSocketStream } from "ws";
import { controller } from "./src/controller/controller.js";

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
    port: 8080,
});
  
wss.on("connection", (ws) => {
    const stream = createWebSocketStream(ws);
    stream.on("data", async (data) => {
        let response = Buffer.from(data).toString();
        const listner = response.split(" ")[0];
        const values = [];
        response.split(" ").forEach((item,ind) => {
            if (ind > 0) {
                return values.push(Number(item));
            } 
        });        
        const result = await controller(listner, values);

        result ? ws.send(`${response} ${result}\0`) : ws.send(`${response}\0`);
    });
});
  