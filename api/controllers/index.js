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
    Resume.find({type: 'experience'}, (err, experience) =>{
        if (err){
            res.send(err);
        }
        res.json(experience);
    })
};

export const getProfessionalExperienceByID = (req, res) => {
    Resume.findById({type: 'experience', _id: req.params.ExperienceID}, (err, experience) =>{
        if (err){
            res.send(err);
        }
        res.json(experience);
    })
};

export const updateProfessionalExperience = (req, res) => {
    Resume.findOneAndUpdate({type: 'experience', _id: req.params.ExperienceID}, req.body, {new: true}, (err, experience) =>{
        if (err){
            res.send(err);
        }
        res.json(experience);
    })
};

export const deleteProfessionalExperienceByID = (req, res) => {
    Resume.deleteOne({type: 'experience', _id: req.params.ExperienceID}, (err) =>{
        if (err){
            res.send(err);
        }
        res.json({message: "Successfully deleted experience"});
    })
};