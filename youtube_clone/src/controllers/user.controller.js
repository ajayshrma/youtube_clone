//user.controller.js 


import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"


const registerUser = asyncHandler( async (req,res) => {
 res.status(200).json({
    message: 'User register form'
 })
})

export {
    registerUser,
}