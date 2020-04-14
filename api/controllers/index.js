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

export const addSkills = (req, res, next) => {
    let newSkill = new Resume(req.body);

    newSkill.save((err, skill) =>{
        if (err){
            res.send(err);
        }
        res.json(skill);
    })
};

export const addEducation = (req, res, next) => {
    let newEducation = new Resume(req.body);

    newEducation.save((err, education) =>{
        if (err){
            res.send(err);
        }
        res.json(education);
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

export const getSkills = (req, res) => {
    Resume.find({type: 'skills'}, (err, skills) =>{
        if (err){
            res.send(err);
        }
        res.json(skills);
    })
};

export const getEducation = (req, res) => {
    Resume.find({type: 'education'}, (err, education) =>{
        if (err){
            res.send(err);
        }
        res.json(education);
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

export const getSkillsByID = (req, res) => {
    Resume.findById({type: 'skills', _id: req.params.SkillID}, (err, skill) =>{
        if (err){
            res.send(err);
        }
        res.json(skill);
    })
};

export const getEducationByID = (req, res) => {
    Resume.findById({type: 'education', _id: req.params.EducationID}, (err, education) =>{
        if (err){
            res.send(err);
        }
        res.json(education);
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

export const updateSkill = (req, res) => {
    Resume.findOneAndUpdate({type: 'skills', _id: req.params.SkillID}, req.body, {new: true}, (err, skill) =>{
        if (err){
            res.send(err);
        }
        res.json(skill);
    })
};

export const updateEducation = (req, res) => {
    Resume.findOneAndUpdate({type: 'education', _id: req.params.EducationID}, req.body, {new: true}, (err, education) =>{
        if (err){
            res.send(err);
        }
        res.json(education);
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
        res.json({message: "Successfully deleted project"});
    })
};

export const deleteSkillByID = (req, res) => {
    Resume.deleteOne({type: 'skills', _id: req.params.SkillID}, (err) =>{
        if (err){
            res.send(err);
        }
        res.json({message: "Successfully deleted skill"});
    })
};

export const deleteEducationByID = (req, res) => {
    Resume.deleteOne({type: 'education', _id: req.params.EducationID}, (err) =>{
        if (err){
            res.send(err);
        }
        res.json({message: "Successfully deleted education"});
    })
};