const adminControllers = {};
const {User} = require('../models');

//Ver todos los usuarios como Admin
adminControllers.getAllUsers = async(req, res)=>{
    try {
        const allUsers = await User.findAll({
            attributes:{exclude: ['password']}
        });

        return res.json({
            success: true,
            data: allUsers
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al ver los usuarios',
            error_message: error.message
        });
    }
}

//Ver usuarios por ID
adminControllers.getUserById = async(req, res)=>{
    try {
        const userId = req.params.id;

        const users = await User.findOne ({
            where: {
                id: userId
            },
            attributes:{exclude: ['password']}
        });

        if(!users){
            return res.send('Ese usuario no existe')
        }

        return res.json({
            success: true,
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al mostrar al usuario',
            error_message: error.message
        })
    }
}

module.exports = adminControllers;