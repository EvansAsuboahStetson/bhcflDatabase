const ClassesService = require('../../services/classServices');

const ClassesController = {
    async createClass(req, res) {
        try {
            const newClass = await ClassesService.createClass(req.body);
            res.status(201).json(newClass);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getAllClasses(req, res) {
        try {
            const classes = await ClassesService.getAllClasses();
            res.status(200).json(classes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getClassById(req, res) {
        try {
            const classData = await ClassesService.getClassById(req.params.classId);
            if (!classData) {
                return res.status(404).json({ message: 'Class not found' });
            }
            res.status(200).json(classData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateClass(req, res) {
        try {
            const updatedClass = await ClassesService.updateClass(req.params.classId, req.body);
            if (!updatedClass) {
                return res.status(404).json({ message: 'Class not found' });
            }
            res.status(200).json(updatedClass);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteClass(req, res) {
        try {
            await ClassesService.deleteClass(req.params.classId);
            res.status(200).json({ message: 'Class successfully deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = ClassesController;