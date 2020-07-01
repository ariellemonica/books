var db = require("../models/book.js");
var router = require("express").Router();
var axios = require("axios");
const { Router } = require("express");

router.get("/api/books", (req, res) => {
    db.find().then(function(records){
        console.log(records);
        res.json(records)
    })
})

router.delete("/api/books/:id", (req, res) => {
    db.findByIdAndDelete(req.params.id).then(function(records){
        console.log(records);
        res.json(records)
    })
})

router.post("/api/books", (req, res) => {
    db.create(req.body).then(function(records){
        console.log(records);
        res.json(records)
    })
})

router.get("/api/books/:search", (req, res) => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.search)
    .then(function(records){
        // console.log(req.params.search);
        // console.log(records);
        console.log(records.data.items);
        res.send(records.data.items)
    })
})

module.exports = router;