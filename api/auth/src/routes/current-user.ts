import express from 'express';

const router = express.Router();

router.get('/api/v1/auth/currentuser', (req, res) => { 
    res.send('Hi there')
});

export { router as currentUserRouter };