import mongoose from  'mongoose'


// Structure of Database
const userSchema = new mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true},
    CreatedAt:{type:Date , default:Date.now},
    
});

export const User = mongoose.model('User',userSchema)