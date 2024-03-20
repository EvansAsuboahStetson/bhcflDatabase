const ClassModel = require('../models/Classes')

const ClassesService = {
    async createClass(classData) {
        try {
            const newClass = new ClassModel(classData);
            await newClass.save();
            return newClass;
        } catch (error) {
            throw error;
        }
    },

    async getAllClasses() {
        try {
            const classes = await ClassModel.find({});
            return classes;
        } catch (error) {
            throw error;
        }
    },

    async getClassById(classId) {
        try {
            const classData = await ClassModel.findById(classId);
            return classData;
        } catch (error) {
            throw error;
        }
    },

    async updateClass(classId, updateData) {
        try {
            const updatedClass = await ClassModel.findByIdAndUpdate(classId, updateData, { new: true });
            return updatedClass;
        } catch (error) {
            throw error;
        }
    },

    async deleteClass(classId) {
        try {
            await ClassModel.findByIdAndDelete(classId);
            return { message: "Class successfully deleted" };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = ClassesService;
