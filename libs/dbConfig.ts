import mongoose from "mongoose"

const dbConfig = async () =>{
    try {
        if(process.env.MONGODB_URL)
        await mongoose.connect(process.env.MONGODB_URL);
        
        console.log("mongodb connected")
    } catch (error) {
        console.error(error)
    }
}

export default dbConfig;