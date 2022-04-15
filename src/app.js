const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'hbs');

const path = require('path');

const publicDir = path.join(__dirname, "../public")
app.use(express.static(publicDir));


const hbs = require('hbs');

const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);

const viewsPath = path.join(__dirname, "../templates/views");
app.set("views", viewsPath);

const news = require("../tools/news");

app.get("/", (req, res) => {

    news((error, data) => {
        if (error) {
            return res.send(error);
        }
        else {
            res.render("index", {
                title: data,
                description: data,
                urlToImage: data,
                name: "fady",
            }
            )
        }
    })
})


app.get("*", (req, res) => {

    res.render("404", {
        error: "The Page You Search For Not Found ",
        name: "fady"
    })
})

app.listen(port, () => {
    console.log("Server is running ", port);
});