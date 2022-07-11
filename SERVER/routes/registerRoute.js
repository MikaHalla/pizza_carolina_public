import { Router } from 'express';
import users from '../api/users/users.js';
import randomID from '../randomID.js';

const router = Router();

router.post('/', (req, res) => {
  const isUser = users.some((user) => user.name === req.body.name);

  if (isUser) {
    res.status(400).send('Username already exists.');
  } else {
    const newUser = {
      id: randomID(),
      name: req.body.name,
      password: req.body.password,
      isLoggedIn: true,
      isAdmin: false,
      registered: Date.now(),
    };
    users.push(newUser);
    res.status(200).send(newUser);
  }
});

export default router;
