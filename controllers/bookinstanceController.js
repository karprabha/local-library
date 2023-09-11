import BookInstance from "../models/bookinstance.js";
import expressAsyncHandler from "express-async-handler";

export const bookinstance_list = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance list");
});

export const bookinstance_detail = expressAsyncHandler(
    async (req, res, next) => {
        res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
    }
);

export const bookinstance_create_get = expressAsyncHandler(
    async (req, res, next) => {
        res.send("NOT IMPLEMENTED: BookInstance create GET");
    }
);

export const bookinstance_create_post = expressAsyncHandler(
    async (req, res, next) => {
        res.send("NOT IMPLEMENTED: BookInstance create POST");
    }
);

export const bookinstance_delete_get = expressAsyncHandler(
    async (req, res, next) => {
        res.send("NOT IMPLEMENTED: BookInstance delete GET");
    }
);

export const bookinstance_delete_post = expressAsyncHandler(
    async (req, res, next) => {
        res.send("NOT IMPLEMENTED: BookInstance delete POST");
    }
);

export const bookinstance_update_get = expressAsyncHandler(
    async (req, res, next) => {
        res.send("NOT IMPLEMENTED: BookInstance update GET");
    }
);

export const bookinstance_update_post = expressAsyncHandler(
    async (req, res, next) => {
        res.send("NOT IMPLEMENTED: BookInstance update POST");
    }
);
