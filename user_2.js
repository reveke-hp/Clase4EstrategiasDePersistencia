const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql' 
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Model = Sequelize.Model;
class User extends Model {}
User.init({
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'user'
  });

sequelize.sync()
.then(() => User.create({
    firstName: 'Andres',
    lastName: 'Gomez'
}))

.then(jane => {
    console.log(jane.toJSON());
}); 

User.destroy({
    where: {
      id: 1 // id a eliminar
    }
  }).then(() => {
    console.log("Elimine Registro");
  });