import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    picture: {
        type: String,
    },
    googleId: {
        type: String,
        required: true,
        unique: true,
    },
    enrolledCourses: {
        type: [Number],
        default: [],
    },
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
