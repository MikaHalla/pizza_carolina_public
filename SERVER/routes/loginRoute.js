import express from 'express';
import users from '../api/users/users.js';

const router = express.Router();

router.post('/', (req, res) => {
  const user = users.find(
    (user) =>
      req.body.name === user.name &&
      req.body.password === user.password
  );

  !user
    ? res.status(400).send('Incorrect username or password.')
    : res.send({
        id: user.id,
        name: user.name,
        isLoggedIn: true,
        isAdmin: user.isAdmin,
      });
});

export default router;
