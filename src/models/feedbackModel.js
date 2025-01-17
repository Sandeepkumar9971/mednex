import mongoose from "mongoose";


const feedbackSchema = mongoose.model({
    patient:{
        type: String,
        default: "The patient gave no feedback."
    },
    doctor:{
        type: String,
        default: "The doctor gave no feedback."
    },
    date: {
        type: Date,
        default: Date.now
    },
    doctorInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctors',
        required: true,
    },
    userInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    rating: {
        type: Number,
        required: true
    }
})

export const Feedback = mongoose.models.Feedback || mongoose.model('feedbacks', feedbackSchema)
