const express = require('express');
const chalk = require('chalk');
const path = require('path');

var nav = [
    {
        link:'/books', 
        title:'Books'
    },
    {
        link:'/authors',
        title:'Authors'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);

var app = new express();


// app.all('/', function(req,res)
//     {
//         res.send("Hello World!...");
//     });
// app.listen(8080);
// app.get('/', function(req,res)
//     {
//         res.send("Hello World Fam!...");
//     });
// app.listen(3000, function()
// {
//     console.log("Listening to port:3000")
// });

app.use(express.static(path.join(__dirname,"/public")));

// app.get('/', function(req,res)
//     {
//         res.sendfile(path.join(__dirname, "src/views/index.htm"));
//     });
// app.listen(3000, function()
// {
//     console.log('Listening to port'+chalk.green('3000'));
// });

app.set('views','./src/views');
app.set('view engine','ejs');

app.use('/books',booksRouter);

app.get('/', (req,res)=>
    {
        res.render(
            'index',
            {
                nav,
                title:"Library"
            });
    });


app.listen(3000, ()=>
{
    console.log('Listening to port: '+chalk.red('3000'));
});
