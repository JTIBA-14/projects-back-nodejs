const Sequelize = require('sequelize');

class Projects extends Sequelize.Model {
    static init(sequelize){
        super.init(
            {
                name: {
                    type: Sequelize.STRING,
                    validate: {
                        notEmpty: {
                            args: true,
                            msg: 'Please provider a name',
                        }
                    }
                },
                priority: Sequelize.INTEGER,
                description: Sequelize.TEXT,
                deliverydate: Sequelize.DATE         
            },
            {
                sequelize,
                modelName: 'Projects',
                nameTable: 'projects',
            }
        );

        return this
    }
} 

module.exports = Projects;
