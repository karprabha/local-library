import Genre from "../models/genre.js";
import Book from "../models/book.js";
import expressAsyncHandler from "express-async-handler";
import { body, validationResult } from "express-validator";

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

export const genre_create_get = (req, res, next) => {
    res.render("genre_form", { title: "Create Genre" });
};

export const genre_create_post = [
    body("name", "Genre name must contain at least 3 characters")
        .trim()
        .isLength({ min: 3 })
        .escape(),

    expressAsyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const genre = new Genre({ name: req.body.name });

        if (!errors.isEmpty()) {
            res.render("genre_form", {
                title: "Create Genre",
                genre: genre,
                errors: errors.array(),
            });
            return;
        } else {
            const genreExists = await Genre.findOne({ name: req.body.name })
                .collation({ locale: "en", strength: 2 })
                .exec();

            if (genreExists) {
                res.redirect(genreExists.url);
            } else {
                await genre.save();
                res.redirect(genre.url);
            }
        }
    }),
];

export const genre_delete_get = expressAsyncHandler(async (req, res, next) => {
    const [genre, booksInGenre] = await Promise.all([
        Genre.findById(req.params.id).exec(),
        Book.find({ genre: req.params.id }, "title summary").exec(),
    ]);
    if (genre === null) {
        res.redirect("/catalog/genres");
    }

    res.render("genre_delete", {
        title: "Delete Genre",
        genre: genre,
        genre_books: booksInGenre,
    });
});

export const genre_delete_post = expressAsyncHandler(async (req, res, next) => {
    const [genre, booksInGenre] = await Promise.all([
        Genre.findById(req.params.id).exec(),
        Book.find({ genre: req.params.id }, "title summary").exec(),
    ]);

    if (booksInGenre.length > 0) {
        res.render("genre_delete", {
            title: "Delete Genre",
            genre: genre,
            genre_books: booksInGenre,
        });
        return;
    } else {
        await Genre.findByIdAndRemove(req.body.id);
        res.redirect("/catalog/genres");
    }
});

export const genre_update_get = expressAsyncHandler(async (req, res, next) => {
    const genre = await Genre.findById(req.params.id).exec();

    if (genre === null) {
        const err = new Error("Genre not found");
        err.status = 404;
        return next(err);
    }

    res.render("genre_form", { title: "Update Genre", genre: genre });
});

export const genre_update_post = [
    body("name", "Genre name must contain at least 3 characters")
        .trim()
        .isLength({ min: 3 })
        .escape(),

    expressAsyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const genre = new Genre({
            name: req.body.name,
            _id: req.params.id,
        });

        if (!errors.isEmpty()) {
            res.render("genre_form", {
                title: "Update Genre",
                genre: genre,
                errors: errors.array(),
            });
            return;
        } else {
            await Genre.findByIdAndUpdate(req.params.id, genre);
            res.redirect(genre.url);
        }
    }),
];
