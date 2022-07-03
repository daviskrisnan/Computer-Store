const { tokenVerifier } = require('../helpers/jsonwebtoken');

const authentication = (req, res, next) => {
    const access_token = req.headers.access_token;
    console.log(req.headers);

    if(access_token) {
        try {
            let verifyToken = tokenVerifier(access_token);
            req.userData = verifyToken;
            next();
        } catch(err) {
            console.log(err)
            res.status(403).json({
                message: `Token is invalid`
            })
        }
    } else {
        res.status(404).json({
            message: `404: Access Token not found`
        })
    }
}

module.exports = { authentication }