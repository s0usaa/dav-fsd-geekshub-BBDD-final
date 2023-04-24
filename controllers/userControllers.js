const userControllers = {};
const { where } = require('sequelize');
const {User, Match_User} = require('../models');

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

//Crear una partida
userControllers.newMatch = async(req, res)=>{
    try {
        const userId = req.userId;

        const {match_id, date, time} = req.body;
        const match = {
            user_id: userId,
            match_id: match_id,
            date: date,
            time: time,
        };

        const game = await Match_User.create(match);
        return res.json(game);
    } catch (error) {
        returnres.status(500).json({
            success: false,
            message: 'No se ha podido crear la partida',
            error_message: error.message,
        });
    }
}

//Modificar una partida
userControllers.updateMatch = async(req, res)=>{
    try {
        const userId = req.userId;
        const {id, match_id, date, time} = req.body;

        const match = await Match_User.findOne({
            where:{
                id:id,
                user_id: userId,
            }
        });
        if (!match){
            return res.send('No existen partidas');
        }

        const matchUpdate = await Match_User.update({
            match_id: match_id,
            date: date,
            time:time,
        },
        {where:{
            id:id,
            user_id:userId,
        }}
        );

        if(!matchUpdate){
            return res.send('Partida no modificada');
        }

        return res.send('Partida modificada');
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Fallo al actualizar la partida',
            error_message: error.message
        })
    }
}
module.exports = userControllers;