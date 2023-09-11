import Book from "../models/book.js";
import Genre from "../models/genre.js";
import Author from "../models/author.js";
import BookInstance from "../models/bookinstance.js";
import expressAsyncHandler from "express-async-handler";

export const index = expressAsyncHandler(async (req, res, next) => {
    const [
        numBooks,
        numBookInstances,
        numAvailableBookInstances,
        numAuthors,
        numGenres,
    ] = await Promise.all([
        Book.countDocuments({}).exec(),
        BookInstance.countDocuments({}).exec(),
        BookInstance.countDocuments({ status: "Available" }).exec(),
        Author.countDocuments({}).exec(),
        Genre.countDocuments({}).exec(),
    ]);

    res.render("index", {
        title: "Local Library Home",
        book_count: numBooks,
        book_instance_count: numBookInstances,
        book_instance_available_count: numAvailableBookInstances,
        author_count: numAuthors,
        genre_count: numGenres,
    });
});

export const book_list = expressAsyncHandler(async (req, res, next) => {
    const allBooks = await Book.find({}, "title author")
        .sort({ title: 1 })
        .populate("author")
        .exec();

    res.render("book_list", { title: "Book List", book_list: allBooks });
});

export const book_detail = expressAsyncHandler(async (req, res, next) => {
    const [book, bookInstances] = await Promise.all([
        Book.findById(req.params.id)
            .populate("author")
            .populate("genre")
            .exec(),
        BookInstance.find({ book: req.params.id }).exec(),
    ]);

    if (book === null) {
        const err = new Error("Book not found");
        err.status = 404;
        return next(err);
    }

    res.render("book_detail", {
        title: book.title,
        book: book,
        book_instances: bookInstances,
    });
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
