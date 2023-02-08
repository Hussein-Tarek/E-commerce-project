const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken')

const User = require('./../models/userModel')



exports.login = async ( req, res)=>{
    const { email, password } = req.body;
    if ( !email || !password ) {
		return res.json('invalid email or password');
	}
    const user = await User.findOne({email});
    if ( !user ) {
        return res.json('invalid email or password');
    }
    const isValidPassword = (password === user.password)? true : false;     ///   test  
    // const isValidPassword = await bcrypt.compare(password, user?.password); 
    if ( !isValidPassword ) {
        return res.json('invalid email or password');
    }
    const token = jwt.sign({userId:user._id},"122"/*secret*/ ); 
    res.status(200).send({
        success: true, 
        message: "login successfully",
        token
    });
}