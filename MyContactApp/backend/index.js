//import dependancies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var contact = require("./models/contacts.server.model");
var cors = require('cors');

//create instances
var app = express();
app.listen(4000);
app.use(cors());

//app.use('/',express.static(__dirname+"/public/build"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//create and manage database connection
var mongoDB = 'mongodb://admin:root@contactsdb-shard-00-00-4j975.mongodb.net:27017,contactsdb-shard-00-01-4j975.mongodb.net:27017,contactsdb-shard-00-02-4j975.mongodb.net:27017/test?ssl=true&replicaSet=contactsDB-shard-0&authSource=admin';
mongoose.connect(mongoDB,{useMongoClient: true});
var db = mongoose.connection;
db.on('open',() => {console.log('connected')});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//handle requests
app.get('/contacts',function (req,res) {
         //res.json({'ns':'this is get'});
    contact.find(function (err, contact) {
        if(err)
            res.send(err);
        res.send(contact);

    })
    })

    .get('/contact/:id',function (req,res) {
        contact.findOne({_id:req.params.id},function (err, contact) {
            if(err)
                res.send(err);
            res.send(contact);

        })
    })

    .post('/contact/add',function (req,res) {
        var cntct = new contact();
        (req.body.name) ? cntct.name = req.body.name : null;
        (req.body.mobileOffice) ? cntct.mOffice = req.body.mobileOffice : null;
        (req.body.mobilePersonal) ? cntct.mPersonal = req.body.mobilePersonal : null;
        (req.body.address) ? cntct.address = req.body.address : null;

        cntct.save(function(err) {
            if (err)
                res.send(err);
            res.send({ message: 'Contact successfully added!' });
        });

    })

    .put('/contact/:id',function(req, res) {
        contact.findById(req.params.id,function (err,cntct) {
            if(err)
                res.send(err);
            //setting new values
            //if nothing has changed
            //no field is altered
            (req.body.name) ? cntct.name = req.body.name : null;
            (req.body.mobileOffice) ? cntct.mOffice = req.body.mobileOffice : null;
            (req.body.mobilePersonal) ? cntct.mPersonal = req.body.mobilePersonal : null;
            (req.body.address) ? cntct.address = req.body.address : null;

            cntct.save(function(err){
                if(err)
                    re.send(err);
                res.send({message: 'Contact has been updated'});
            })
        })
    })