import express from 'express';
import { addProfessionalExperience, getProfessionalExperience, updateProfessionalExperience, getProfessionalExperienceByID, deleteProfessionalExperienceByID } from '../controllers/index';

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

module.exports = router;