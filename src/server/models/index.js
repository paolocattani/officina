require('dotenv').config()
import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize from 'sequelize';

const basename = _basename(__filename);
var db        = {};

// Db config
const env = process.env.NODE_ENV.trim() || 'development';
// eslint-disable-next-line import/no-dynamic-require
const config = require(`${__dirname}./../config/config.json`)[env];
   
let sequelize; 
if (config.use_env_variable) 
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
else 
    sequelize = new Sequelize(config.database, config.username, config.password, config);

readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        const model = sequelize.import(join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
       if (db[modelName].associate) {
         db[modelName].associate(db);
       }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;   
 
module.exports = db;
