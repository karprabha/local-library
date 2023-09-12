import Book from "../models/book.js";
import BookInstance from "../models/bookinstance.js";
import expressAsyncHandler from "express-async-handler";
import { body, validationResult } from "express-validator";

export const bookinstance_list = expressAsyncHandler(async (req, res, next) => {
    const allBookInstances = await BookInstance.find().populate("book").exec();

    res.render("bookinstance_list", {
        title: "Book Instance List",
        bookinstance_list: allBookInstances,
    });
});

export const bookinstance_detail = expressAsyncHandler(
    async (req, res, next) => {
        const bookInstance = await BookInstance.findById(req.params.id)
            .populate("book")
            .exec();

        if (bookInstance === null) {
            const err = new Error("Book copy not found");
            err.status = 404;
            return next(err);
        }

        res.render("bookinstance_detail", {
            title: "Book:",
            bookinstance: bookInstance,
        });
    }
);

export const bookinstance_create_get = expressAsyncHandler(
    async (req, res, next) => {
        const allBooks = await Book.find({}, "title").exec();

        res.render("bookinstance_form", {
            title: "Create BookInstance",
            book_list: allBooks,
        });
    }
);

export const bookinstance_create_post = [
    body("book", "Book must be specified").trim().isLength({ min: 1 }).escape(),
    body("imprint", "Imprint must be specified")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("status").escape(),
    body("due_back", "Invalid date")
        .optional({ values: "falsy" })
        .isISO8601()
        .toDate(),

    expressAsyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const bookInstance = new BookInstance({
            book: req.body.book,
            imprint: req.body.imprint,
            status: req.body.status,
            due_back: req.body.due_back,
        });

        if (!errors.isEmpty()) {
            const allBooks = await Book.find({}, "title").exec();

            res.render("bookinstance_form", {
                title: "Create BookInstance",
                book_list: allBooks,
                selected_book: bookInstance.book._id,
                errors: errors.array(),
                bookinstance: bookInstance,
            });
            return;
        } else {
            await bookInstance.save();
            res.redirect(bookInstance.url);
        }
    }),
];

export const bookinstance_delete_get = expressAsyncHandler(
    async (req, res, next) => {
        const bookInstance = await BookInstance.findById(req.params.id)
            .populate("book")
            .exec();

        if (bookInstance === null) {
            res.redirect("/catalog/bookinstances");
        }

        res.render("bookinstance_delete", {
            title: "Delete BookInstance",
            bookinstance: bookInstance,
        });
    }
);

export const bookinstance_delete_post = expressAsyncHandler(
    async (req, res, next) => {
        await BookInstance.findByIdAndRemove(req.body.id);
        res.redirect("/catalog/bookinstances");
    }
);

export const bookinstance_update_get = expressAsyncHandler(
    async (req, res, next) => {
        const [bookInstance, allBooks] = await Promise.all([
            BookInstance.findById(req.params.id).populate("book").exec(),
            Book.find(),
        ]);

        if (bookInstance === null) {
            const err = new Error("Book copy not found");
            err.status = 404;
            return next(err);
        }

        res.render("bookinstance_form", {
            title: "Update BookInstance",
            book_list: allBooks,
            selected_book: bookInstance.book._id,
            bookinstance: bookInstance,
        });
    }
);

export const bookinstance_update_post = [
    body("book", "Book must be specified").trim().isLength({ min: 1 }).escape(),
    body("imprint", "Imprint must be specified")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("status").escape(),
    body("due_back", "Invalid date")
        .optional({ values: "falsy" })
        .isISO8601()
        .toDate(),

    expressAsyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const bookInstance = new BookInstance({
            book: req.body.book,
            imprint: req.body.imprint,
            status: req.body.status,
            due_back: req.body.due_back,
            _id: req.params.id,
        });

        if (!errors.isEmpty()) {
            const allBooks = await Book.find({}, "title").exec();

            res.render("bookinstance_form", {
                title: "Update BookInstance",
                book_list: allBooks,
                selected_book: bookInstance.book._id,
                errors: errors.array(),
                bookinstance: bookInstance,
            });
            return;
        } else {
            await BookInstance.findByIdAndUpdate(
                req.params.id,
                bookInstance,
                {}
            );
            res.redirect(bookInstance.url);
        }
    }),
];
