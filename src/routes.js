const express =  require('express');
const ProjectController = require('./app/controller/ProjectController');

const router = express.Router();

// Routes projects
router.get('/projects', ProjectController.index ); // get all projects
router.post('/projects', ProjectController.store ); // Create new project
router.get('/projects/:id', ProjectController.show ); // show project by ID
router.put('/projects/:id', ProjectController.update ); // Edit project by ID
router.delete('/projects/:id', ProjectController.destroy ); // Delete project by ID


module.exports = router;