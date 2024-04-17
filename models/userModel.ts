import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    clerkId: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },

},
    {
        timestamps: true
    }
)

const userModel = mongoose.models.userModel || mongoose.model("userModel", userSchema);

export default userModel