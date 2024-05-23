//@desc Register a user
//@route POST /api.users/register
//@access public
const asyncHandler = require("express-async-handler")



const registerUser = asyncHandler(async(req, res) => {
    res.json({message: "Register the user"});
});
//@desc login a user
//@route POST /api.users/login
//@access public

const loginUser = asyncHandler(async(req, res) => {
    res.json({message: "login user"});
});

//@desc curreent user info
//@route POST /api.users/current
//@access private

const currentUser = asyncHandler(async(req, res) => {
    res.json({message: "current user"});
});

module.exports = {registerUser, loginUser, currentUser};