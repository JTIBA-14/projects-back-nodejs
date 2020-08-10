const Sequelize = require('sequelize');

class Projects extends Sequelize.Model {
    static init(sequelize){
        super.init(
            {
                name:Sequelize.STRING,
                priority: Sequelize.INTEGER,
                description: Sequelize.TEXT,
                deliverydate: Sequelize.DATE
            },
            {
                sequelize,
                modelName: 'Projects'
            }
        );

        return this
    }
} 

module.exports = Projects;

/*

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Projects extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         
        static associate(models) {
        // define association here
        }
    };
    Projects.init({
        
        name: {
            allowNull: false,
            type: Sequelize.STRING(150)
        },
        priority: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.TEXT
        },
        deliverydate: {
            allowNull: false,
            type: Sequelize.DATE
        },
    }, {
        sequelize,
        modelName: 'Projects',
        nameTable: 'projects'
    });

    return Projects;
};

*/