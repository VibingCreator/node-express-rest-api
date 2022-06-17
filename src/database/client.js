import { createClient } from "redis";

const client = createClient({
    socket: {
        host: "redis",
        port: 6379
    }
});

await client.connect();

client.on("error", (error) => {
    console.log("redis client error", error);
});

export { client };