import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ResumeSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    place: {
        type: String,
    },
    date: {
        type: String,
    },
    links: {
        type: Array,
    },
    content: {
        body:{
            type: String,
        },
        bullet:{
            type: String,
        }
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});