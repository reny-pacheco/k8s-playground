const { Router } = require('express');
const { getTechnology } = require('../controllers/technologies');
const requireAuth = require('../middlewares/authMiddleware');

const router = Router();

router.get('/tech/:id', requireAuth, getTechnology);

module.exports = router;
