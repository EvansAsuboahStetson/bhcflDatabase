const User = require('../models/User');

const UserServices = {
    async createUser(userData) {
        console.log('userData', userData);
        try {
            const user = new User(userData);
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    },

    async getUserById(userId) {
        try {
            const user = await User.findById(userId);
            return user;
        } catch (error) {
            throw error;
        }
    },

    async getAllUsers() {
        try {
            const users = await User.find({});
            return users;
        } catch (error) {
            throw error;
        }
    },

    async updateUser(userId, updateData) {
        try {
            // Ensure that only certain fields can be updated, to maintain security
            const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
            return user;
        } catch (error) {
            throw error;
        }
    },

    async deleteUser(userId) {
        try {
            await User.findByIdAndDelete(userId);
            return { message: "User successfully deleted" };
        } catch (error) {
            throw error;
        }
    },
};

module.exports = UserServices;
