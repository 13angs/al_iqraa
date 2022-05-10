import express from 'express';

const router = express.Router();

router.post('/api/v1/auth/signin', (req, res) => {
    res.send('Hi there')
});

export {router as signinRouter}