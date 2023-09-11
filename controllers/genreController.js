import Genre from "../models/genre.js";
import Book from "../models/book.js";
import expressAsyncHandler from "express-async-handler";

export const genre_list = expressAsyncHandler(async (req, res, next) => {
    const allGenres = await Genre.find().sort({ name: 1 }).exec();
    res.render("genre_list", {
        title: "Genre List",
        genre_list: allGenres,
    });
});

export const genre_detail = expressAsyncHandler(async (req, res, next) => {
    const [genre, booksInGenre] = await Promise.all([
        Genre.findById(req.params.id).exec(),
        Book.find({ genre: req.params.id }, "title summary").exec(),
    ]);
    if (genre === null) {
        const err = new Error("Genre not found");
        err.status = 404;
        return next(err);
    }

    res.render("genre_detail", {
        title: "Genre Detail",
        genre: genre,
        genre_books: booksInGenre,
    });
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
