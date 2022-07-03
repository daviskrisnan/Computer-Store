const { user } = require('../models');
const { decryptPass } = require('../helpers/bcrypt');
const { tokenGenerator } = require('../helpers/jsonwebtoken');


class UserController {
    static async getUser(req, res) {
        try {
            let users = await user.findAll();

            res.status(200).json(users);
        } catch(err) {
            res.status(404).json({
                message: `Not Found`
            })
        }
    }

    static async register(req, res) {
        try {
            const { 
                user_name, 
                user_email, 
                user_password, 
                user_birthdate, 
                user_gender, 
                user_avatar, 
                user_type 
            } = req.body;

            let result = await user.create({
                user_name, 
                user_email, 
                user_password, 
                user_birthdate, 
                user_gender, 
                user_avatar, 
                user_type
            })
            res.status(200).json(result)
        } catch (err) {
            res.status(404).json({
                message: `Register has Failed!`
            })
        }
    }
    
    static async login(req, res) {
        try {
            const {user_email, user_password} = req.body;
            let emailFound = await user.findOne({
                where: {user_email}
            });

            if (emailFound) {
                if(decryptPass(user_password, emailFound.user_password)) {
                    let access_token = tokenGenerator(emailFound);
                    res.status(200).json( {access_token} );

                    // let verToken = tokenVerifier(access_token);
                    // console.log(verToken);
                } else {
                    res.status(500).json({
                        message: `Invalid Password!`
                    })
                }
            } else {
                res.status(404).json({
                    message: `404: Not Found!`
                })
            }
        } catch (err) {
            res.status(404).json({
                message: `Error 404 : User Not Found!`
            })
        }
    }

    static async getUserbyId(req, res) {
        try {
            const id = +req.userData.id;
            let result = [await user.findByPk(id)];

            res.status(200).json(result);
        } catch (err) {
            res.status(404).json({
                message: `Failed!`
            })
        }
    }
}

module.exports = UserController;