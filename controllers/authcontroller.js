const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '1h',
    });
}

// signup
const signupUser = async (req, res) =>{
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        return res.status(400).json({message:'Please enter all fields'});
    }

    try {
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message: 'User already exists'})
        }
        const user = await User.create({
            username, 
            email,
            password,
        });

        if(user){
            res.status(201).json({message: 'User registered successfully'});
        }

    } catch (error) {
        res.status(500).json({message:'server error'});
    }
};

//login
const loginUser = async (req,res) =>{
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(user && (await user.matchpassword(password))){
            res.json({
                message: 'Logged in succesfully',
                username: user.username,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            })
        }
        else {
            res.status(401).json({message:" invalid email or password"});
        }
    } catch (error) {
        res.status(500).json({message:'Server error'});
    }
};
module.exports = {signupUser, loginUser};