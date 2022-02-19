var express = require("express");
var helmet = require('helmet');
var app = express();
//var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/hikedata';

app.set("view engine", "jade")
app.set("views", "MyViews")

app.use(helmet());
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/database', function (req, res) {
    res.render('database');
});

app.get('/search', function (req, res) {
    res.render('search');
});

app.get('/hongkong_island', function (req, res) {
    res.render('hongkong_island');
});

app.get('/kowloon', function (req, res) {
    res.render('kowloon');
});

app.get('/lantau_island', function (req, res) {
    res.render('lantau_island');
});

app.get('/new_territories', function (req, res) {
    res.render('new_territories');
});

//hiking trails in new territorites
app.get('/yuentsuen_trail', function (req, res) {
    res.render('new_territorites/yuentsuen_trail');
});

app.get('/tai_to_yan', function (req, res) {
    res.render('new_territorites/tai_to_yan');
});

app.get('/ho_pui', function (req, res) {
    res.render('new_territorites/ho_pui');
});

app.get('/kai_kung', function (req, res) {
    res.render('new_territorites/kai_kung');
});

//hiking trails in lantau island
app.get('/sunset_peak', function (req, res) {
    res.render('lantau_island/sunset_peak');
});

app.get('/lantau_peak', function (req, res) {
    res.render('lantau_island/lantau_peak');
});

app.get('/ngong_ping', function (req, res) {
    res.render('lantau_island/ngong_ping');
});

//hiking trails in kowloon
app.get('/kowloon_peak', function (req, res) {
    res.render('kowloon/kowloon_peak');
});

app.get('/razar_hill', function (req, res) {
    res.render('kowloon/razar_hill');
});

app.get('/lion_rock', function (req, res) {
    res.render('kowloon/lion_rock');
});

//hiking trails in hongkong island
app.get('/dragon_back', function (req, res) {
    res.render('hongkong_island/dragon_back');
});

app.get('/peak', function (req, res) {
    res.render('hongkong_island/peak');
});

app.get('/high_west', function (req, res) {
    res.render('hongkong_island/high_west');
});

app.get('/tai_tam', function (req, res) {
    res.render('hongkong_island/tai_tam');
});

var server = app.listen(process.env.PORT ||3000, function () {
    console.log('Node server is running..');
    console.log('Node.js web server at port 3000 is running..')
    console.log('visit http://127.0.0.1:3000 ')
});
/*
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/hikedata';
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log('database connected');
    var dbase = db.db("hikedata");
   dbase.collection("hikedata"). find({'difficulty': '3 stars'}.toArray(function(err,result) {
        if (err) throw err;
        console.log(result);
		console.log(result[0].name);
        db.close();
    });
});*/

