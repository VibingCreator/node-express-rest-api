import { createClient } from "redis";

const client = createClient();

await client.connect();

client.on("error", (error) => {
    console.log("redis client error", error);
});

export { client };