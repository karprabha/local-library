import Author from "../models/author.js";
import Book from "../models/book.js";
import expressAsyncHandler from "express-async-handler";

export const author_list = expressAsyncHandler(async (req, res, next) => {
    const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
    res.render("author_list", {
        title: "Author List",
        author_list: allAuthors,
    });
});

export const author_detail = expressAsyncHandler(async (req, res, next) => {
    const [author, allBooksByAuthor] = await Promise.all([
        Author.findById(req.params.id).exec(),
        Book.find({ author: req.params.id }, "title summary").exec(),
    ]);

    if (author === null) {
        const err = new Error("Author not found");
        err.status = 404;
        return next(err);
    }

    res.render("author_detail", {
        title: "Author Detail",
        author: author,
        author_books: allBooksByAuthor,
    });
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
