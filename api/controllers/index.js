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

export const addInterest = (req, res, next) => {
    let newInterest = new Resume(req.body);

    newInterest.save((err, interest) =>{
        if (err){
            res.send(err);
        }
        res.json(interest);
    })
};

export const addHeading = (req, res, next) => {
    let newHeading = new Resume(req.body);
    Resume.find({type: 'heading'}, (err, heading) =>{
        if (err){
            res.send(err);
        }
        else if (heading.length){
            res.json({message: "Heading already exists in database"});
        }
        else{
            newHeading.save((err, heading) =>{
                if (err){
                    res.send(err);
                }
                res.json(heading);
            })
        }
    })
    
};

export const addSummary = (req, res, next) => {
    let newSummary = new Resume(req.body);
    Resume.find({type: 'summary'}, (err, summary) =>{
        if (err){
            res.send(err);
        }
        else if (summary.length){
            res.json({message: "Summary already exists in database"});
        }
        else{
            newSummary.save((err, summary) =>{
                if (err){
                    res.send(err);
                }
                res.json(summary);
            })
        }
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

export const getInterest = (req, res) => {
    Resume.find({type: 'interests'}, (err, interest) =>{
        if (err){
            res.send(err);
        }
        res.json(interest);
    })
};

export const getHeading = (req, res) => {
    Resume.find({type: 'heading'}, (err, heading) =>{
        if (err){
            res.send(err);
        }
        res.json(heading);
    })
};

export const getSummary = (req, res) => {
    Resume.find({type: 'summary'}, (err, summary) =>{
        if (err){
            res.send(err);
        }
        res.json(summary);
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

export const getInterestByID = (req, res) => {
    Resume.findById({type: 'interests', _id: req.params.InterestID}, (err, interest) =>{
        if (err){
            res.send(err);
        }
        res.json(interest);
    })
};

export const getHeadingByID = (req, res) => {
    Resume.findById({type: 'heading', _id: req.params.HeadingID}, (err, heading) =>{
        if (err){
            res.send(err);
        }
        res.json(heading);
    })
};

export const getSummaryByID = (req, res) => {
    Resume.findById({type: 'summary', _id: req.params.SummaryID}, (err, summary) =>{
        if (err){
            res.send(err);
        }
        res.json(summary);
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

export const updateInterest = (req, res) => {
    Resume.findOneAndUpdate({type: 'interests', _id: req.params.InterestID}, req.body, {new: true}, (err, interest) =>{
        if (err){
            res.send(err);
        }
        res.json(interest);
    })
};

export const updateHeading = (req, res) => {
    Resume.findOneAndUpdate({type: 'heading', _id: req.params.HeadingID}, req.body, {new: true}, (err, heading) =>{
        if (err){
            res.send(err);
        }
        res.json(heading);
    })
};

export const updateSummary = (req, res) => {
    Resume.findOneAndUpdate({type: 'summary', _id: req.params.SummaryID}, req.body, {new: true}, (err, summary) =>{
        if (err){
            res.send(err);
        }
        res.json(summary);
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

export const deleteInterestByID = (req, res) => {
    Resume.deleteOne({type: 'interests', _id: req.params.InterestID}, (err) =>{
        if (err){
            res.send(err);
        }
        res.json({message: "Successfully deleted interest"});
    })
};

export const deleteHeadingByID = (req, res) => {
    Resume.deleteOne({type: 'heading', _id: req.params.HeadingID}, (err) =>{
        if (err){
            res.send(err);
        }
        res.json({message: "Successfully deleted heading"});
    })
};

export const deleteSummaryByID = (req, res) => {
    Resume.deleteOne({type: 'summary', _id: req.params.SummaryID}, (err) =>{
        if (err){
            res.send(err);
        }
        res.json({message: "Successfully deleted summary"});
    })
};