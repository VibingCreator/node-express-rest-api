import { URL } from "node:url";

const validate = (url) => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

export { validate };