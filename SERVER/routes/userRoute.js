import express from 'express';
import users from '../api/users/users.js';

const router = express.Router();

router.post('/:id', (req, res) => {
  const user = users.find(
    (user) =>
      user.name === req.body.name &&
      user.password === req.body.password
  );
  !user
    ? res.status(400).send('incorrect username or password')
    : (user.isLoggedIn = true);
  res.json(user.isLoggedIn);
});

export default router;
