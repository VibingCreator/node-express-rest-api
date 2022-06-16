import { parse } from "node:url";
import { nanoid } from "nanoid/async";
import { client } from "../database/client.js";
import { validate } from "../utils/urls.js";

// this is very bad
const getAllUrls = async () => {
    const allUrls = await client.keys("*");
    return allUrls;
};

const getUrlByKey = async (key) => {
    const url = await client.get(key);

    if (!url) {
        return false;
    }

    return url;
};

const setUrl = async (query) => {
    if (!query.url) {
        return false;
    }

    const isValid = validate(query.url);

    if (!isValid) {
        return false;
    }

    const { href } = parse(query.url);

    // 1000 IDs per hour → 1% probability of at least one collision in ~17 years
    const short = await nanoid(10);

    const url = await client.set(short, href);
    
    if (!url) {
        return false;
    }

    return short;
};

export { getAllUrls, getUrlByKey, setUrl };