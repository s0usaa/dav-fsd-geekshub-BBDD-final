const authControllers = {};
const {User} = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//registro de usuario
authControllers.registerUser = async(req, res)=>{
    try {
        const {name, surname, level, email, password} = req.body;
        
        const encryptedPassword = bcrypt.hashSync(password, 10);

        const newUser = 
        {
            name: name,
            surname: surname,
            level: level,
            email: email,
            password: encryptedPassword,
            roles_id: 2,
            coaches_id:1
        }
        const user = await User.create(newUser)

        return res.json(user);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Registro fallido",
            error_message: error.message
        });
    }
}

authControllers.login = async(req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne(
        {
            where:
            {email: email},
        });

        if(!user){
            return res.send('Usuario incorrecto')
        }

        const isMatch = bcrypt.compareSync(password, user.password);

        if(!isMatch){
            return res.send ('Credenciales erroneas');
        }

        const token = jwt.sign(
        {
        userId: user.id,
        email: user.email,
        roleId: user.roles_id
        },
        "secreto",
        {expiresIn: "5h"}
        );
        return res.json(token);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Login fallido",
            error_message: error.message
        });
    }
}

module.exports = authControllers;