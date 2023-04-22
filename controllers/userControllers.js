const userControllers = {};
const {User} = require('../models');

//Ver perfil de usuario
userControllers.profile = async(req, res)=>{
    try {
        const userId = req.userId;
        const profile = await User.findByPk(userId)

        return res.json(profile);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "No puedes ver tu profile",
            error_message: error.message
        })
    }
}

//Modificar perfil de usuario
userControllers.updateProfile = async(req, res)=>{
    try {
        const {coaches_id, name, surname, phone} = req.body;
        const userId = req.userId;

        const updateProfile = await User.update({
            coaches_id,
            name,
            surname,
            phone
        },
        {where: {id:userId}})

        if(!updateProfile){
            return res.send('Perfil no actualizado');
        }

        return res.send('Perfil actualizado')
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Fallo al actualizar tu perfil",
            error_message: error.message
        })
    }
}

module.exports = userControllers;