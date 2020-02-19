const express = require('express');
const booksRouter = express.Router();
function router(nav)
{
    var books = [
        {
            title : "First Book War and Peace",
            genre : "First Book Historical Fiction",
            author : "First Book Lev Step",
            image : "image1.jpg"
        },
        {
            title : "Second Book War and Peace",
            genre : "Second Book Historical Fiction",
            author : "Second Book Lev Step",
            image : "image2.jpg"
        },
        {
            title : "Third Book War and Peace",
            genre : "Third Book Historical Fiction",
            author : "Third Book Lev Step",
            image : "image3.jpg"
        },
        {
            title : "Fourth Book War and Peace",
            genre : "Fourth Book Historical Fiction",
            author : "Fourth Book Lev Step",
            image : "image4.jpg"
        }
    ];

    booksRouter.route('/')
        .get((req,res)=>
        {
            res.render(
                'books',
                {
                    nav,
                    title:"Books",
                    books
                });
        });

    booksRouter.route('/:id')
        .get((req,res)=>
        {
            const id = req.params.id;
            res.render(
                'book',
                {
                    nav,
                    title:"Books",
                    book: books[id],
                    id
                });
        });
        return booksRouter;
}
module.exports = router;