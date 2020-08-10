const Sequelize = require('sequelize');

//import models
const Project = require('./../models/projects');
// Database
const databaseConfig = require('../../config/database');

// construc models
const models = [Project];

class Databases {
    constructor() {
        this.init();
    }

    init(){

        this.connection = new Sequelize(databaseConfig);
    
        models
          .map(model => model.init(this.connection))
          .map(model => model.associate && model.associate(this.connection.models))
    
      }
}

module.exports = new Databases();
