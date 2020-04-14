import express from 'express';
import { addProfessionalExperience, 
    getProfessionalExperience, 
    updateProfessionalExperience, 
    getProfessionalExperienceByID, 
    deleteProfessionalExperienceByID, 
    addProjects, 
    getProjects, 
    getProjectsByID, 
    updateProject, 
    deleteProjectByID,
    addSkills, 
    getSkills, 
    getSkillsByID, 
    updateSkill, 
    deleteSkillByID,
    addEducation,
    getEducation,
    getEducationByID,
    updateEducation,
    deleteEducationByID } from '../controllers/index';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('API Root');
});
  
router.route('/experience')
    .post(addProfessionalExperience)
    .get(getProfessionalExperience);

router.route('/experience/:ExperienceID')
    .get(getProfessionalExperienceByID)
    .put(updateProfessionalExperience)
    .delete(deleteProfessionalExperienceByID);

router.route('/project')
    .post(addProjects)
    .get(getProjects);

router.route('/project/:ProjectID')
    .get(getProjectsByID)
    .put(updateProject)
    .delete(deleteProjectByID);

router.route('/skills')
    .post(addSkills)
    .get(getSkills);

router.route('/skills/:SkillID')
    .get(getSkillsByID)
    .put(updateSkill)
    .delete(deleteSkillByID);

router.route('/education')
    .post(addEducation)
    .get(getEducation);

router.route('/education/:EducationID')
    .get(getEducationByID)
    .put(updateEducation)
    .delete(deleteEducationByID);

module.exports = router;