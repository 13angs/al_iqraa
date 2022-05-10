import express from 'express';

const router = express.Router();

router.post('/api/v1/auth/signout', (req, res) => {
    res.send('Hi from signout');
});

export { router as signoutRouter };