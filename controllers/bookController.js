import Book from "../models/book.js";
import expressAsyncHandler from "express-async-handler";

export const index = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
});

export const book_list = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book list");
});

export const book_detail = expressAsyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
});

export const book_create_get = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book create GET");
});

export const book_create_post = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book create POST");
});

export const book_delete_get = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book delete GET");
});

export const book_delete_post = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book delete POST");
});

export const book_update_get = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book update GET");
});

export const book_update_post = expressAsyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book update POST");
});
