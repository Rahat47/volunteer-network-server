import User from '../models/userModel.js'


export const addNewUser = async (req, res) => {
    const { name, email } = req.body
    try {
        const existingUser = await User.findOne({ email })
        console.log(existingUser)
    } catch (error) {

    }
}