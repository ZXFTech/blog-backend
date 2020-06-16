import mongoose from 'mongoose'
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: String,
    author: String,
    content: String,
    keywords:[String],
    comments:[{
        name:String,
        contact:{
            QQ:Number,
            WeChat:Number,
            Email:String
        },
        content:String,
        date:Date}],
    date:{
        type:Date,
        default:Date.now
    },
    updateDate:{
        type:Date,
        default:Date.now
    },
    hidden:Boolean,
    meta:{
        favs:Number
    },
    removed:{
        type:Boolean,
        default:false
    }
})

const Blog = mongoose.model('Blog',blogSchema)

export default Blog