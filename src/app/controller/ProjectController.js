 const Project = require('./../models/projects');
const Projects = require('./../models/projects');

class ProjectController {

    //Get all projects
    async index( req, res ) {
        try {
            const project = await Project.findAll({ 
                attributes: ['id', 'name', 'priority', 'description', 'deliverydate']
            });
            res.status(200).json({
                data: project
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error internal server'
            });
        }
    }

    // show project by ID
    async show( req, res ) {
        const { id } = req.params;

        try {
            const project = await Project.findOne({ 
                attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
                where: { id }
            });
            res.status(200).json({
                data: project
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error internal server'
            });
        }
    }
    
    async store( req, res ) {
        try {
            const { id } = req.params;

            const project = await Project.update( req.body, {
                fields: Object.keys( req.body ),
                where: { id }
            } );
            res.status(201).json({
                message: 'Project created successfully!!',
                data: project
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error internal server',
                error: error.errors
            });
        }
    }

    async update( req, res ) {
        try {
            const project = await Project.create( req.body, {
                fields: Object.keys( req.body )
            } );
            res.status(201).json({
                message: 'Project created successfully!!',
                data: project
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error internal server',
                error: error.errors
            });
        }
    }

    async destroy( req, res ) {

    }

}

module.exports = new ProjectController();