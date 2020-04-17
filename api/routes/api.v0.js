import express from 'express';
import { addProfessionalExperience, getProfessionalExperience, updateProfessionalExperience, getProfessionalExperienceByID, deleteProfessionalExperienceByID, 
    addProjects, getProjects, getProjectsByID, updateProject, deleteProjectByID, 
    addSkills, getSkills, getSkillsByID, updateSkill, deleteSkillByID, 
    addEducation, getEducation, getEducationByID, updateEducation, deleteEducationByID, 
    addInterest, getInterest, getInterestByID, updateInterest, deleteInterestByID,
    addHeading, getHeading, getHeadingByID, updateHeading, deleteHeadingByID,
    addSummary, getSummary, getSummaryByID, updateSummary, deleteSummaryByID } from '../controllers/index';

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

router.route('/interests')
    .post(addInterest)
    .get(getInterest);

router.route('/interests/:InterestID')
    .get(getInterestByID)
    .put(updateInterest)
    .delete(deleteInterestByID);

router.route('/heading')
    .post(addHeading)
    .get(getHeading);

router.route('/heading/:HeadingID')
    .get(getHeadingByID)
    .put(updateHeading)
    .delete(deleteHeadingByID);

router.route('/summary')
    .post(addSummary)
    .get(getSummary);

router.route('/summary/:SummaryID')
    .get(getSummaryByID)
    .put(updateSummary)
    .delete(deleteSummaryByID);

module.exports = router;