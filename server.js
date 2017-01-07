var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var nodeadmin = require('nodeadmin'); 
var Sequelize = require("sequelize"); // am inclus modulul de sequelize intr-o var 
// var models  = require('./models');

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(nodeadmin(app));

//-------------------------------------------------------creare bd parking-----------------------------------------------------
// creez o bd cu numele parcare, userul deny si fara parola 
var sequelize = new Sequelize('parking', 'deny', '', { //  o instanta a clasei sequelize
   dialect: 'mysql', //ce tip de bd folosesc
   host:'127.0.0.1',
   port: 3306
});

//--------------------------------------------------------creez  tabela parkingSpaces, structura tabelei e definita in models/ParkingSpaces----------------------------------------------------

// var ParkingSpaces=models.ParkingSpaces;
var ParkingSpaces = sequelize.define('parkingSpaces', { // creez o noua tabela parkingSpaces
  idParkingSpace: {  // nume atribut in cod
    type: Sequelize.INTEGER, //tip atribut
    field: 'idParkingSpace' , // nume atribut in baza de date
    primaryKey: true,
    autoIncrement: true
  },
  number: {
    type: Sequelize.INTEGER,
    field: 'number',
    allowNull: false,
    validate:{ isNumeric:true, min:1 }
  },
  parcel: {
    type: Sequelize.STRING,
    field: 'parcel',
    allowNull: false,
    validate:{ isAlpha:true }
  },
  floor: {
    type: Sequelize.INTEGER,
    field: 'floor',
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    field: 'price'
  },
  status: {
    type: Sequelize.STRING,
    field: 'status'
  }
}, {
  freezeTableName: false, // Model tableName will be the same as the model name
   timestamps: false
});


//--------------------------------------------------------creez  tabela Tickets----------------------------------------------------

// var Tickets = models.Tickets;

 var Tickets = sequelize.define('tickets', { // creez o noua tabela tickets
  idTicket: {  // nume atribut in cod
    type: Sequelize.INTEGER, //tip atribut
    field: 'idTicket',
    primaryKey: true
  },
  idParkingSpace: {
    type: Sequelize.INTEGER,
    field: 'idParkingSpace'
  },
  entryDate: {
    type: Sequelize.DATE,
    field: 'entryDate',
    allowNull: false
  }
}, {
  freezeTableName: false, // Model tableName will be the same as the model name
 timestamps: false
    
});
//--------------------------------------------------------creez  tabela Bills----------------------------------------------------
// var Bills=models.Bills;
var Bills = sequelize.define('bills', { // creez o noua tabela Bills
  idBill: {  // nume atribut in cod
    type: Sequelize.INTEGER, //tip atribut
    field: 'idBill',
    primaryKey: true,
    autoIncrement: true
  },
  idTicket: {
    type: Sequelize.INTEGER,
    field: 'idTicket'
  },
  departureDate: {
    type: Sequelize.DATE,
    field: 'departureDate',
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    field: 'price'
  }
}, {
  freezeTableName: false, // Model tableName will be the same as the model name
 timestamps: false
    
});


// realizare legaturi intre tabele => 
//foreign key ParkingSpaces-Tickets
ParkingSpaces.belongsTo(Tickets, {foreignKey: 'idParkingSpace'});
Tickets.hasOne(ParkingSpaces, {foreignKey: 'idParkingSpace'});
//=> foreign key Tickets-Bills
Tickets.belongsTo(Bills, {foreignKey: 'idTicket'});
Bills.hasOne(Tickets, {foreignKey: 'idTicket'});






//------------------------adaugare inregistare loc de parcare ----------------------
// ParkingSpaces.create({idParkingSpace:1,number:7,parcel:"D",floor:1,status:"liber"}).then(function(task){
//     task.save();
// });  

//---------------------------------gasire iloc de parcare cu numarul 7---------------------
// ParkingSpaces.findAll({
//     where:{
//         number:7
//     }
// }).then(function(foundObject){
//     console.log("Am gasit locul de parcare cu numarul 7 , are id-ul: "+foundObject[0].idParkingSpace);
// });
    
//-----------------------------------------------------------------REST methods-parkingSpaces-------------------------------------------------------------------

app.get('/parkingSpaces',function(req,res){
    ParkingSpaces.findAll().then(function(gasit){
        res.status(200).send(gasit);
    });
});
// app.get('/parkingSpaces',function(req,res){
//         res.status(200).send([]); //cand intru pe /rentals afiseaza []
// });
 
app.post('/parkingSpaces',function(req,res)
 {ParkingSpaces.create(req.body).then(function(parkingSpace){
   ParkingSpaces.findById(parkingSpace.id).then(function(parkingSpace){
       res.status(201).send(parkingSpace);
   });
 });
});

app.get('/parkingSpaces/:id',function(req,res){
    ParkingSpaces.findById(req.params.id).then(function(parkingSpace){
        if(parkingSpace){
            res.status(200).send(parkingSpace);
        }
        else{
            res.status(404).send();
        }
    })
});

app.put('/parkingSpaces/:id',function(req,res){
    ParkingSpaces.findById(req.params.id).then(function(parkingSpace){
        if(parkingSpace){
            parkingSpace.updateAttributes(req.body).then(function(){
                res.status(200).send('updated');
            }).catch(function(error){
                console.warn(error);
                res.status(500).send('server error');
            });
        }else{
            res.status(404).send();
        }
    });
});

app.delete('/parkingSpaces/:id',function(req,res){
    ParkingSpaces.findById(req.params.id).then(function(parkingSpace)
    {if(parkingSpace){
        parkingSpace.destroy().then(function(){
            res.status(204).send();
        }).catch(function(error){
            res.status(500).send('server error');
        });
    }else{
        res.status(404).send();
    }
  });
});

//-----------------------------------------------------------------REST methods-tickets-------------------------------------------------------------------

app.get('/tickets',function(req,res){
    Tickets.findAll().then(function(tickets){
        res.status(200).send(tickets);
    });
});
// app.get('/tickets',function(req,res){
//         res.status(200).send([]); //cand intru pe /rentals afiseaza []
// });
 
app.post('/tickets',function(req,res)
 {Tickets.create(req.body).then(function(ticket){
   Tickets.findById(ticket.id).then(function(ticket){
       res.status(201).send(ticket);
   });
 });
});

app.get('/tickets/:id',function(req,res){
    Tickets.findById(req.params.id).then(function(ticket){
        if(ticket){
            res.status(200).send(ticket);
        }
        else{
            res.status(404).send();
        }
    })
});

app.put('/tickets/:id',function(req,res){
    Tickets.findById(req.params.id).then(function(ticket){
        if(ticket){
            ticket.updateAttributes(req.body).then(function(){
                res.status(200).send('updated');
            }).catch(function(error){
                console.warn(error);
                res.status(500).send('server error');
            });
        }else{
            res.status(404).send();
        }
    });
});

app.delete('/tickets/:id',function(req,res){
    Tickets.findById(req.params.id).then(function(ticket)
    {if(ticket){
        ticket.destroy().then(function(){
            res.status(204).send();
        }).catch(function(error){
            res.status(500).send('server error');
        });
    }else{
        res.status(404).send();
    }
  });
});

//-----------------------------------------------------------------REST methods-bills-------------------------------------------------------------------

app.get('/bills',function(req,res){
    Bills.findAll().then(function(gasit){
        res.status(200).send(gasit);
    });
});
// app.get('/tickets',function(req,res){
//         res.status(200).send([]); //cand intru pe /rentals afiseaza []
// });
 
app.post('/bills',function(req,res)
 {Bills.create(req.body).then(function(bill){
   Bills.findById(bill.id).then(function(bill){
       res.status(201).send(bill);
   });
 });
});

app.get('/bills/:id',function(req,res){
    Bills.findById(req.params.id).then(function(bill){
        if(bill){
            res.status(200).send(bill);
        }
        else{
            res.status(404).send();
        }
    })
});

app.put('/bills/:id',function(req,res){
    Bills.findById(req.params.id).then(function(bill){
        if(bill){
            bill.updateAttributes(req.body).then(function(){
                res.status(200).send('updated');
            }).catch(function(error){
                console.warn(error);
                res.status(500).send('server error');
            });
        }else{
            res.status(404).send();
        }
    });
});

app.delete('/bills/:id',function(req,res){
    Bills.findById(req.params.id).then(function(bill)
    {if(bill){
        bill.destroy().then(function(){
            res.status(204).send();
        }).catch(function(error){
            res.status(500).send('server error');
        });
    }else{
        res.status(404).send();
    }
  });
});


sequelize.sync();

//---------------------------------------------------------------------------------------------------------------------------

app.use('/entry',express.static('entry'));
app.use(express.static('entry'));

app.use('/departure',express.static('departure'));
app.use('/util',express.static('util'));


app.listen(process.env.PORT);