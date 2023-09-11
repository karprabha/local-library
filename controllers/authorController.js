import Author from "../models/author.js";
import expressAsyncHandler from "express-async-handler";

export const author_list = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author list");
});

export const author_detail = expressAsyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Author Detail: ${req.params.id}`);
});

export const author_create_get = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author create GET");
});

export const author_create_post = expressAsyncHandler(
    async (req, res, next) => {
        res.send("NOT IMPLEMENTED: Author create POST");
    }
);

export const author_delete_get = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete GET");
});

export const author_delete_post = expressAsyncHandler(
    async (req, res, next) => {
        res.send("NOT IMPLEMENTED: Author delete POST");
    }
);

export const author_update_get = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update GET");
});

export const author_update_post = expressAsyncHandler(
    async (req, res, next) => {
        res.send("NOT IMPLEMENTED: Author update POST");
    }
);
