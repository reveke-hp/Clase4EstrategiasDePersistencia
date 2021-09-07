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

User.bulkCreate([
    { firstName: 'Juan', lastName: 'Gomez'},
    { firstName: 'Pedro', lastName: 'Rios' },
    { firstName: 'Matias', lastName: 'Juarez' }
  ]).then(() => { 
    return User.findAll();
  }).then(users => {
    console.log(users)
})

User.bulkCreate([
  { firstName: 'Juan', lastName: 'Gomez'},
  { firstName: 'Pedro', lastName: 'Rios'},
  { firstName: 'Matias', lastName: 'Juarez'}
]).then(() => {
  return Task.update(
    { lastName: 'Hitler' }
  );
}).then(([affectedCount, affectedRows]) => {
  return Task.findAll();
}).then(tasks => {
  console.log(tasks)
})
