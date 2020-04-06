import express from 'express';
import { addProfessionalExperience, getProfessionalExperience } from '../controllers/index';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('API Root');
});
  
router.post('/experience', addProfessionalExperience);
router.get('/experience', getProfessionalExperience)

module.exports = router;