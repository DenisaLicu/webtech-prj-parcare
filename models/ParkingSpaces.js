module.exports = function(sequelize, Sequelize) {
    // define entity
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

 return ParkingSpaces;
}