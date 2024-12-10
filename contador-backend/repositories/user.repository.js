const {User} = require('../models');

const UserRepository = {
    getAllUsers: async () => {
        return await User.findAll();
    },

    getUserById: async (id) => {
        return await User.findByPk(id);
    },

    getUserByEmail: async (email) => {
        return await User.findOne({where: {email}});
    },

    createUser: async (data) => {
        return await User.create(data);
    },

    updateUser: async (id, data) => {
        const user = await User.findByPk(id);
        if (!user) return null;
        await user.update(data);
        return user;
    },

    deleteUser: async (id) => {
        const user = await User.findByPk(id);
        if (!user) return null;
        await user.destroy();
        return user;
    },
};

module.exports = UserRepository;
