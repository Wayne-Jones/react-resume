import mongoose from 'mongoose';
import { ResumeSchema } from '../models/index';

const Resume = mongoose.model('Resume', ResumeSchema);

export const addProfessionalExperience = (req, res, next) => {
    console.log(req.body);
    let newExperience = new Resume(req.body);

    newExperience.save((err, experience) =>{
        if (err){
            res.send(err);
        }
        res.json(experience);
    })
};

export const getProfessionalExperience = (req, res) => {
    Resume.find({}, (err, experience) =>{
        if (err){
            res.send(err);
        }
        res.json(experience);
    })
};