module.exports = function(sequelize, Sequelize) {
    // define entity
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

 return Bills;
}