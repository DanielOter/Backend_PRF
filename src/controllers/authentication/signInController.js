const {signInService} = require('../../services/signInService');

const signInController = async (req,res,next) =>  {

    try {
        const email = req.email;
        const {nickname:ReqNickname} = req?.body;
        const {status,message,nickname} = await signInService({email,nickname:ReqNickname})
        res.status(status).json({message,nickname});
    } catch (error) {  
        console.log(error)
        next(error);
    }
}

module.exports = { signInController }