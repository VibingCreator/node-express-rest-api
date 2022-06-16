import { getAllUrls, getUrlByKey, setUrl } from "../services/urls.js";

const dump = async (req, res, next) => {
    const urls = await getAllUrls();

    if (!urls) return res.status(404).send("Not Found");

    res.send(urls);
};

const read = async (req, res, next) => {
    const url = await getUrlByKey(req.params.id);

    if (!url) return res.status(404).send("Not Found");

    res.redirect(url);
};

const create = async (req, res, next) => {
    const url = await setUrl(req.query);

    if (!url) return res.status(400).send("Bad Request");

    res.send(url);
};

export { dump, read, create };