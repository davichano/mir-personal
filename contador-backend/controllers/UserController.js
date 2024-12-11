const UserService = require('../services/user.service');

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({error: 'Error al obtener usuarios'});
        }
    },

    getUserById: async (req, res) => {
        try {
            const {id} = req.params;
            const user = await UserService.getUserById(id);
            if (!user) return res.status(404).json({error: 'Usuario no encontrado'});
            res.json(user);
        } catch (error) {
            res.status(500).json({error: 'Error al obtener el usuario'});
        }
    },

    createUser: async (req, res) => {
        try {
            const user = await UserService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({error: 'Error al crear el usuario'});
        }
    },

    updateUser: async (req, res) => {
        try {
            const {id} = req.params;
            const updatedUser = await UserService.updateUser(id, req.body);
            if (!updatedUser) return res.status(404).json({error: 'Usuario no encontrado'});
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({error: 'Error al actualizar el usuario'});
        }
    },

    deleteUser: async (req, res) => {
        try {
            const {id} = req.params;
            const deletedUser = await UserService.deleteUser(id);
            if (!deletedUser) return res.status(404).json({error: 'Usuario no encontrado'});
            res.json({message: 'Usuario eliminado correctamente'});
        } catch (error) {
            res.status(500).json({error: 'Error al eliminar el usuario'});
        }
    },

    registerUser: async (req, res) => {
        try {
            const user = await UserService.registerUser(req.body);
            res.status(201).json({message: 'Usuario registrado correctamente', user});
        } catch (error) {
            res.status(500).json({error: 'Error al registrar el usuario'});
        }
    },

    loginUser: async (req, res) => {
        try {
            const {email, password} = req.body;
            const token = await UserService.loginUser(email, password);
            res.json({message: 'Login exitoso', token});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },

    getProfile: async (req, res) => {
        try {
            const {id} = req.user;
            console.log(req.user);
            const user = await UserService.getUserById(id);
            res.json(user);
        } catch (error) {
            res.status(500).json({error: 'Error al obtener el perfil'});
        }
    },

    updateUserWithFile: async (req, res) => {
        try {
            const {id} = req.params;
            const data = {...req.body};

            if (req.file) {
                data.company_logo = `/uploads/${req.file.filename}`;
            }

            const updatedUser = await UserService.updateUser(id, data);
            if (!updatedUser) return res.status(404).json({error: 'Usuario no encontrado'});
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({error: 'Error al actualizar el usuario'});
        }
    },

};

module.exports = UserController;
