import mongoose from 'mongoose'
const Schema = mongoose.Schema

const globalSchema = new Schema({
    name:{
        type:String,
        default:'Global'
    },
    allKeywords:[String]
})

const Global = mongoose.model('Global',globalSchema)

export default Global