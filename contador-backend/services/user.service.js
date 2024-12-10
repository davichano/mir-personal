const UserRepository = require('../repositories/user.repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserService = {
    getAllUsers: async () => {
        return await UserRepository.getAllUsers();
    },

    getUserById: async (id) => {
        return await UserRepository.getUserById(id);
    },

    createUser: async (data) => {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return await UserRepository.createUser({...data, password: hashedPassword});
    },

    updateUser: async (id, data) => {
        return await UserRepository.updateUser(id, data);
    },

    deleteUser: async (id) => {
        return await UserRepository.deleteUser(id);
    },

    registerUser: async (data) => {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return await UserRepository.createUser({...data, password: hashedPassword});
    },

    loginUser: async (email, password) => {
        const user = await UserRepository.getUserByEmail(email);
        if (!user) throw new Error('Usuario no encontrado');
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error('Credenciales inválidas');

        return jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
    },
};

module.exports = UserService;
