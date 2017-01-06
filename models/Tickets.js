module.exports = function(sequelize, Sequelize) {
    // define entity
    var Tickets = sequelize.define('tickets', { // creez o noua tabela tickets
  idTicket: {  // nume atribut in cod
    type: Sequelize.INTEGER, //tip atribut
    field: 'idTicket',
    primaryKey: true,
    autoIncrement: true
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

 return Tickets;
}