import mongoose from 'mongoose';
import { ResumeSchema } from '../models/index';

const Resume = mongoose.model('Resume', ResumeSchema);

/*
***
    Adding Controllers
***
*/

export const addProfessionalExperience = (req, res, next) => {
    let newExperience = new Resume(req.body);

    newExperience.save((err, experience) =>{
        if (err){
            res.send(err);
        }
        res.json(experience);
    })
};

export const addProjects = (req, res, next) => {
    let newProject = new Resume(req.body);

    newProject.save((err, project) =>{
        if (err){
            res.send(err);
        }
        res.json(project);
    })
};

/*
***
    Getting Controllers
***
*/

export const getProfessionalExperience = (req, res) => {
    Resume.find({type: 'experience'}, (err, experience) =>{
        if (err){
            res.send(err);
        }
        res.json(experience);
    })
};

export const getProjects = (req, res) => {
    Resume.find({type: 'projects'}, (err, projects) =>{
        if (err){
            res.send(err);
        }
        res.json(projects);
    })
};

/*
***
    Getting Controllers (Individual)
***
*/

export const getProfessionalExperienceByID = (req, res) => {
    Resume.findById({type: 'experience', _id: req.params.ExperienceID}, (err, experience) =>{
        if (err){
            res.send(err);
        }
        res.json(experience);
    })
};

export const getProjectsByID = (req, res) => {
    Resume.findById({type: 'projects', _id: req.params.ProjectID}, (err, project) =>{
        if (err){
            res.send(err);
        }
        res.json(project);
    })
};

/*
***
    Updating Controllers
***
*/

export const updateProfessionalExperience = (req, res) => {
    Resume.findOneAndUpdate({type: 'experience', _id: req.params.ExperienceID}, req.body, {new: true}, (err, experience) =>{
        if (err){
            res.send(err);
        }
        res.json(experience);
    })
};

export const updateProject = (req, res) => {
    Resume.findOneAndUpdate({type: 'projects', _id: req.params.ProjectID}, req.body, {new: true}, (err, project) =>{
        if (err){
            res.send(err);
        }
        res.json(project);
    })
};

/*
***
    Deleting Controllers
***
*/

export const deleteProfessionalExperienceByID = (req, res) => {
    Resume.deleteOne({type: 'experience', _id: req.params.ExperienceID}, (err) =>{
        if (err){
            res.send(err);
        }
        res.json({message: "Successfully deleted experience"});
    })
};

export const deleteProjectByID = (req, res) => {
    Resume.deleteOne({type: 'projects', _id: req.params.ProjectID}, (err) =>{
        if (err){
            res.send(err);
        }
        res.json({message: "Successfully deleted experience"});
    })
};