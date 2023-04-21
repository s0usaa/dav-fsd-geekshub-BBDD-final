const userControllers = {};
const {User} = require('../models');

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

module.exports = userControllers;