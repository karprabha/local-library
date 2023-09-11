import Genre from "../models/genre.js";
import expressAsyncHandler from "express-async-handler";

export const genre_list = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre list");
});

export const genre_detail = expressAsyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Genre detail: ${req.params.id}`);
});

export const genre_create_get = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre create GET");
});

export const genre_create_post = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre create POST");
});

export const genre_delete_get = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre delete GET");
});

export const genre_delete_post = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre delete POST");
});

export const genre_update_get = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre update GET");
});

export const genre_update_post = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre update POST");
});
