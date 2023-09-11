import BookInstance from "../models/bookinstance.js";
import expressAsyncHandler from "express-async-handler";

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
