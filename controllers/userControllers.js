const userControllers = {};
const { where } = require('sequelize');
const {User, Match_User, Match, Coach} = require('../models');

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

//Eliminar una partida como usuario
userControllers.deleteMatch = async(req, res)=>{
    try {
        const userId = req.userId;
        const matchId = req.params.id;

        const match = await Match_User.findOne({
            where:{
                user_id: userId,
                id: matchId
            }
        });

        if (!match){
            return res.send('No existen partidas');
        }

        const matchDelete = await Match_User.destroy({
            where:{
                id: matchId,
                user_id: userId
            }
        });

        return res.json(matchDelete);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al borrar la partida",
            error_message: error.message
        });
    }
}

//Ver partidas como usuario
userControllers.getMatch = async(req, res)=>{
    try {
        const userId = req.userId;

        const viewMatch = await Match_User.findAll({
            where: {
                user_id: userId
            },
            include: [
                {
                    model: Match,
                    attributes: {exclude: ['id', 'createdAt', 'updatedAt']},
                },
                {
                    model: User,
                    include: [{
                        model: Coach,
                        attributes: {exclude: ['createdAt', 'updatedAt']}
                    }],
                    attributes: ['name', 'surname', 'level']
                }
            ],
            attributes: {exclude: ['user_id', 'match_id', 'createdAt', 'updatedAt']}
        });

        return res.json(viewMatch)
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al ver tus partidas',
            error_message: error.message
        });
    }
}

//Ver las pistas como usuario
userControllers.getTracks = async(req, res)=>{
    try {
        const tracks = await Match.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}});

        return res.json({
            success: true,
            data: tracks,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al ver las pistas',
            error_message: error.message
        });
    }
}

//Ver los entrenadores
userControllers.getCoaches = async(req, res)=>{
    try {
        const coaches = await Coach.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}});

        return res.json({
            success: true,
            data: coaches,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al ver las pistas',
            error_message: error.message
        });
    }
}

module.exports = userControllers;