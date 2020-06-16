import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    nickname: String,
    email: String,
    blog: {
        name:String,
        url:String
    },
    contacts: [{
        way: String,
        url: String
    }],
    introduce: String,
    allKeywords:[String]
})

const User = mongoose.model('User', userSchema)

export default User