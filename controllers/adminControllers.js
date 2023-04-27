const adminControllers = {};
const {User, Track, Coach} = require('../models');

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

//Ver usuarios por ID como Admin
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

//Crear pistas como Admin
adminControllers.createTracks = async(req, res)=>{
    try {
        const {track_number, type} = req.body

        const addTrack ={
            track_number: track_number,
            type: type
        }

        const newTrack = await Track.create(addTrack)

        return res.json({
            success: true,
            data: newTrack
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'No se ha podido crear la pista',
            error_message: error.message,
        });
    }
}

//Eliminar una pista como Admin
adminControllers.deleteTracks = async(req, res)=>{
    try {
        const trackId = req.params.id;

        const tracks = await Track.findOne({
            where:{
                id: trackId
            }
        });

        if(!tracks){
            return res.send('No existe esa pista');
        }

        const trackDelete = await Track.destroy({
            where:{
                id: trackId
            }
        });

        return res.json({
            success: true,
            data: trackDelete
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al borrar una pista',
            error_message: error.message
        });
    }
}

//Modificar una pista como Admin
adminControllers.updateTracks = async(req, res)=>{
    try {
        const {id, type} = req.body;

        const tracks = await Track.findOne({
            where:{
                id:id
            }
        });

        if(!tracks){
            return res.send('No existe esa pista');
        }

        const trackUpdate = await Track.update({
            id:id,
            type: type
        },
        {where:{
            id:id
        }
        });

        if(!trackUpdate){
            return res.send('Pista no modificada');
        }

        return res.send('Pista modificada');
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Fallo al actualizar la pista',
            error_message: error.message
        });
    }
}

//Ver pistas como Admin
adminControllers.getTracks = async(req, res)=>{
    try {
        const getTracks = await Track.findAll({
            attributes:{exclude: ['createdAt', 'updatedAt']}
        });

        return res.json({
            success: true,
            data: getTracks
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al ver las pistas',
            error_message: error.message
        });
    }
}

//Ver entrenadores como Admin
adminControllers.getCoaches = async(req, res)=>{
    try {
        const getCoaches = await Coach.findAll({
            attributes:{exclude: ['createdAt', 'updatedAt']}
        });

        return res.json({
            success: true,
            data: getCoaches
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al ver los entrenadores',
            error_message: error.message
        });
    }
}

//Crear un entrenador como Admin
adminControllers.createCoaches = async(req,res)=>{
    try {
        const {especialidad} = req.body

        const addCoach ={
            especialidad: especialidad
        }

        const newTrack = await Coach.create(addCoach)

        return res.json({
            success: true,
            data: newTrack
        })
    } catch (error) {
        
    }
}


module.exports = adminControllers;